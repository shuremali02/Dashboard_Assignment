import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";
import type { MonthlyRecord } from "../types/dashboard";
import { currency } from "../utils/format";

interface LinesChartProps {
  current: MonthlyRecord[]; // [{ month, revenue, expenses, profit }]
}

export default function LinesChart({ current }: LinesChartProps) {
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm w-full h-full">
      <h2 className="text-lg font-semibold mb-3">Performance Trend</h2>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={current} margin={{ left: 8, right: 16, top: 8, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis tickFormatter={currency} tick={{ fontSize: 12 }} />
          <Tooltip formatter={(val: number) => currency(val)} />
          <Legend />

          <Line type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="expenses" stroke="#f59e0b" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="profit" stroke="#16a34a" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
