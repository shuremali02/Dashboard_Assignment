import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { currency } from "../utils/format";

interface StatCardProps {
  label: string;
  value: number;
  prevValue: number;
}

export default function StatCard({ label, value, prevValue }: StatCardProps) {
  const diff = value - prevValue;
  const pct = prevValue ? ((diff / prevValue) * 100).toFixed(1) : "—";
  const positive = diff >= 0;

  return (
    <Card className="w-full shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">
          {label}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        <span className="text-xl font-semibold">{currency(value)}</span>
        <span
          className={`text-xs ${
            positive ? "text-green-600" : "text-red-600"
          }`}
        >
          {positive ? "+" : ""}
          {currency(diff)} ({pct}% vs LY)
        </span>
      </CardContent>
    </Card>
  );
}
