export interface DailyRecord {
    date: string; // ISO date
    revenue: number;
    expenses: number;
    profit: number;
  }
  
  export interface Totals {
    revenue: number;
    expenses: number;
    profit: number;
  }
  
  export interface MonthlyRecord {
    month: number; // 1-12
    revenue: number;
    expenses: number;
    profit: number;
  }
  
  export type FilterType = "YTD" | "MTD" | "WTD" | "DAILY" | "CUSTOM";
  