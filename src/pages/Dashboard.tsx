import { useFilters } from "@/components/context/FilterContext";
import useDashboardData from "@/components/hooks/useDashboardData";
import FilterBar from "@/components/Filterbar";
import StatCard from "@/components/StatCard";
import LinesChart from "@/components/LinesChart";

export default function Dashboard() {
  const { range } = useFilters();
  const { currentMonthly, lastMonthly, years, kpiNow, kpiPrev } =
    useDashboardData(range);

    return (
      <div className="space-y-6 w-full max-w-7xl p-2 bg-amber-400">
        {/* Filter bar */}
        <div className="w-full">
          <FilterBar csvData={currentMonthly} />
        </div>
    
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
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
    
        {/* Chart */}
        <div className="w-full h-[500px]">
          <LinesChart current={currentMonthly} last={lastMonthly} years={years} />
        </div>
      </div>
    );
    
}
