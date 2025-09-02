import { data } from "../../lib/data";
import { filterDailyByRange, toMonthlySeries, totals } from "../../utils/filters";
import { differenceInCalendarDays, addDays, formatISO, parseISO } from "date-fns";
import type { DailyRecord, Totals, MonthlyRecord } from "../../types/dashboard";

interface DashboardData {
  years: { current: number; last: number };
  currentDaily: DailyRecord[];
  prevDaily: DailyRecord[];
  currentMonthly: MonthlyRecord[];
  lastMonthly: MonthlyRecord[];
  kpiNow: Totals;
  kpiPrev: Totals;
  banner: { type: "success" | "danger"; text: string } | null;
  change: number;
}

export default function useDashboardData(range: { start: Date; end: Date }): DashboardData {
  const curYear = data.currentYear;
  const lastYear = data.lastYear;

  const currentDaily = filterDailyByRange(data.daily[curYear], range);

  // same period last year
  const periodDays = differenceInCalendarDays(range.end, range.start) + 1;
  const lastYearStart = addDays(parseISO(formatISO(range.start)), -365);
  const lastYearEnd = addDays(lastYearStart, periodDays - 1);
  const prevDaily = filterDailyByRange(data.daily[lastYear], { start: lastYearStart, end: lastYearEnd });

  const currentMonthly = toMonthlySeries(currentDaily);
  const lastMonthly = toMonthlySeries(prevDaily);

  const kpiNow = totals(currentDaily);
  const kpiPrev = totals(prevDaily);

  const base = kpiPrev.profit || 1;
  const change = (kpiNow.profit - kpiPrev.profit) / base;

  let banner: DashboardData["banner"] = null;
  if (change <= -0.2) banner = { type: "danger", text: "⚠ Profit is down ≥20% vs LY" };
  else if (change >= 0.15) banner = { type: "success", text: "🎉 Profit is up ≥15% vs LY" };

  return {
    years: { current: curYear, last: lastYear },
    currentDaily,
    prevDaily,
    currentMonthly,
    lastMonthly,
    kpiNow,
    kpiPrev,
    banner,
    change,
  };
}
