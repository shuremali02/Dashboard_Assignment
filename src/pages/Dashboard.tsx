import { useFilters } from "../components/context/FilterContext";
import useDashboardData from "../components/hooks/useDashboardData";
import StatCard from "../components/StatCard";
import LinesChart from "../components/LinesChart";
import { BarChart3 } from "lucide-react";
import PerformanceNotification from "../components/NotificationPerformance";

export default function Dashboard() {
  const { range } = useFilters();
  const { currentMonthly, kpiNow, kpiPrev } = useDashboardData(range);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <BarChart3 className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Dashboard</h2>
            <p className="text-gray-600">
              Overview of your business performance
            </p>
          </div>
        </div>
      </div>

      {/* KPI Cards with Filter */}
      <div className="space-y-6">
        {/* ✅ Performance Notification */}
        <PerformanceNotification
          profitThisYear={kpiNow.profit}
          profitLastYear={kpiPrev.profit}
        />

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            label="Revenue"
            value={kpiNow.revenue}
            prevValue={kpiPrev.revenue}
          />
          <StatCard
            label="Expenses"
            value={kpiNow.expenses}
            prevValue={kpiPrev.expenses}
          />
          <StatCard
            label="Profit"
            value={kpiNow.profit}
            prevValue={kpiPrev.profit}
          />
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="h-[500px]">
          <LinesChart current={currentMonthly} />
        </div>
      </div>
    </div>
  );
}
