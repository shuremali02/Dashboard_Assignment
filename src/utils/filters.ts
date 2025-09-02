import {
    startOfYear, endOfDay, startOfMonth, startOfWeek, endOfToday, parseISO, isWithinInterval
} from "date-fns";
import type { DailyRecord, Totals, MonthlyRecord, FilterType } from "../types/dashboard";

export const FILTERS: Record<FilterType, FilterType> = {
    YTD: "YTD",
    MTD: "MTD",
    WTD: "WTD",
    DAILY: "DAILY",
    CUSTOM: "CUSTOM",
  };
  
  export function rangeFor(filter: FilterType, custom: { start?: string; end?: string }) {
    const today = endOfToday();
    switch (filter) {
      case "YTD": return { start: startOfYear(today), end: today };
      case "MTD": return { start: startOfMonth(today), end: today };
      case "WTD": return { start: startOfWeek(today, { weekStartsOn: 1 }), end: today };
      case "DAILY": return { start: today, end: today };
      case "CUSTOM":
        if (custom.start && custom.end) {
          return { start: parseISO(custom.start), end: endOfDay(parseISO(custom.end)) };
        }
        return { start: startOfYear(today), end: today };
      default: return { start: startOfYear(today), end: today };
    }
  }
  
  export function filterDailyByRange(daily: DailyRecord[], { start, end }: { start: Date; end: Date }): DailyRecord[] {
    return daily.filter((d) => isWithinInterval(new Date(d.date), { start, end }));
  }
  
  export function totals(daily: DailyRecord[]): Totals {
    return daily.reduce<Totals>((acc, d) => {
      acc.revenue += d.revenue;
      acc.expenses += d.expenses;
      acc.profit += d.profit;
      return acc;
    }, { revenue: 0, expenses: 0, profit: 0 });
  }
  
  export function toMonthlySeries(daily: DailyRecord[]): MonthlyRecord[] {
    const months: MonthlyRecord[] = Array.from({ length: 12 }, (_, i) => ({
      month: i + 1, revenue: 0, expenses: 0, profit: 0,
    }));
    for (const d of daily) {
      const m = new Date(d.date).getMonth();
      months[m].revenue += d.revenue;
      months[m].expenses += d.expenses;
      months[m].profit += d.profit;
    }
    return months;
  }
