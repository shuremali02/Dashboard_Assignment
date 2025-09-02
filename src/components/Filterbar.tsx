import { useFilters } from "@/components/context/FilterContext";
import { FILTERS } from "@/utils/filters";
import { downloadCSV } from "@/utils/csv";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterBarProps {
  csvData: any[];
}

export default function FilterBar({ csvData }: FilterBarProps) {
  const { filter, setFilter, custom, setCustom } = useFilters();

  return (
    <div className="w-full rounded-xl bg-white p-4 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      {/* Left */}
      <div className="flex flex-wrap items-center gap-3">
        <div>
          <label className="text-xs text-gray-500">Filter</label>
          <Select value={filter} onValueChange={(v) => setFilter(v as typeof filter)}>
            <SelectTrigger className="w-[160px] ">
              <SelectValue placeholder="Select filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={FILTERS.YTD}>Year-to-Date</SelectItem>
              <SelectItem value={FILTERS.MTD}>Month-to-Date</SelectItem>
              <SelectItem value={FILTERS.WTD}>Week-to-Date</SelectItem>
              <SelectItem value={FILTERS.DAILY}>Daily</SelectItem>
              <SelectItem value={FILTERS.CUSTOM}>Custom Range</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {filter === FILTERS.CUSTOM && (
          <>
            <input
              type="date"
              className="border rounded-lg px-3 py-2"
              value={custom.start || ""}
              onChange={(e) => setCustom((c: any) => ({ ...c, start: e.target.value }))}
            />
            <input
              type="date"
              className="border rounded-lg px-3 py-2"
              value={custom.end || ""}
              onChange={(e) => setCustom((c: any) => ({ ...c, end: e.target.value }))}
            />
          </>
        )}
      </div>

      {/* Right */}
      <Button variant="outline" onClick={() => downloadCSV(csvData, "filtered-data.csv")}>
        Export CSV
      </Button>
    </div>
  );
}
