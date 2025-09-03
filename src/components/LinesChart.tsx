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
import useDashboardData from "../components/hooks/useDashboardData";
import type { MonthlyRecord } from "../types/dashboard";
import { currency } from "../utils/format";
import FilterBar from "./Filterbar";
import { useFilters } from "./context/FilterContext";

interface LinesChartProps {
  current: MonthlyRecord[]; // [{ month, revenue, expenses, profit }]
}

export default function LinesChart({ current }: LinesChartProps) {
  const { range } = useFilters();
  const { currentMonthly } = useDashboardData(range);

  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm w-full h-full">
      <FilterBar csvData={currentMonthly} />

      <h2 className="text-lg font-semibold mb-3">Performance Trend</h2>
      <div className="h-[250px] sm:h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={current}
            margin={{ left: 8, right: 16, top: 8, bottom: 40 }} // bottom zyada taake legend adjust ho jaye
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 10 }} // small tick for mobile
              interval="preserveStartEnd" // auto adjust spacing
              angle={-25} // thoda tilt for mobile readability
              textAnchor="end"
              height={50}
            />
            <YAxis
              tickFormatter={currency}
              tick={{ fontSize: 10 }}
              width={60} // zyada chhota na ho
            />
            <Tooltip formatter={(val: number) => currency(val)} />

            {/* Legend responsive banaya */}
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{
                fontSize: "12px",
                paddingTop: "8px",
              }}
            />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="expenses"
              stroke="#f59e0b"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="profit"
              stroke="#16a34a"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
