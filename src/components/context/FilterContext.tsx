import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { FilterType } from "../../types/dashboard";
import { rangeFor } from "../../utils/filters";

interface CustomRange {
  start?: string;
  end?: string;
}

interface FilterContextType {
  filter: FilterType;
  setFilter: (f: FilterType) => void;
  custom: CustomRange;
  setCustom: React.Dispatch<React.SetStateAction<CustomRange>>;
  range: { start: Date; end: Date };
}

const FilterCtx = createContext<FilterContextType | null>(null);

interface FilterProviderProps {
  children: ReactNode;
}

export function FilterProvider({ children }: FilterProviderProps) {
  const [filter, setFilter] = useState<FilterType>("YTD");
  const [custom, setCustom] = useState<CustomRange>({});

  const value: FilterContextType = useMemo(
    () => ({
      filter,
      setFilter,
      custom,
      setCustom,
      range: rangeFor(filter, custom),
    }),
    [filter, custom]
  );

  return <FilterCtx.Provider value={value}>{children}</FilterCtx.Provider>;
}

export function useFilters() {
  const ctx = useContext(FilterCtx);
  if (!ctx) throw new Error("useFilters must be used inside FilterProvider");
  return ctx;
}
