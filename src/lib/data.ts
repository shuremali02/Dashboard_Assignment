import { addDays, eachDayOfInterval, endOfYear, formatISO, startOfYear } from "date-fns";
import type { DailyRecord } from "../types/dashboard";

function makeYearDaily(year: number, seed = 42): DailyRecord[] {
  const days = eachDayOfInterval({ start: startOfYear(new Date(year, 0, 1)), end: endOfYear(new Date(year, 0, 1)) });
  let s = seed + year;
  const rand = () => (s = (s * 16807) % 2147483647) / 2147483647;

  return days.map((d) => {
    const month = d.getMonth();
    const seasonal = 1 + (month - 5) * 0.02;
    const revenue = Math.round(700 + 12 * (d.getDate() + month * 3) * seasonal + rand() * 120);
    const expenses = Math.round(400 + 7 * (d.getDate() + month * 2) * seasonal + rand() * 90);
    return { date: formatISO(d, { representation: "date" }), revenue, expenses, profit: revenue - expenses };
  });
}

const CURRENT_YEAR = new Date().getFullYear();
const LAST_YEAR = CURRENT_YEAR - 1;

export const data = {
  currentYear: CURRENT_YEAR,
  lastYear: LAST_YEAR,
  daily: {
    [CURRENT_YEAR]: makeYearDaily(CURRENT_YEAR),
    [LAST_YEAR]: makeYearDaily(LAST_YEAR, 21),
  },
};
