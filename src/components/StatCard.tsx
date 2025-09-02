import { Card, CardContent,  } from "./ui/card";
import { currency } from "../utils/format";
import { TrendingUp, DollarSign, BarChart3 } from "lucide-react";

interface StatCardProps {
  label: string;
  value: number;
  prevValue: number;
}

export default function StatCard({ label, value, prevValue }: StatCardProps) {
  const diff = value - prevValue;
  const pct = prevValue ? ((diff / prevValue) * 100).toFixed(1) : "—";
  const positive = diff >= 0;

  // Get card styling based on label
  const getCardStyle = (label: string) => {
    switch (label.toLowerCase()) {
      case "revenue":
        return {
          bgColor: "bg-green-50",
          iconColor: "bg-green-100",
          icon: DollarSign,
          textColor: "text-green-600",
          borderColor: "border-green-200"
        };
      case "expenses":
        return {
          bgColor: "bg-orange-50",
          iconColor: "bg-orange-100",
          icon: TrendingUp,
          textColor: "text-orange-600",
          borderColor: "border-orange-200"
        };
      case "profit":
        return {
          bgColor: "bg-purple-50",
          iconColor: "bg-purple-100",
          icon: BarChart3,
          textColor: "text-purple-600",
          borderColor: "border-purple-200"
        };
      default:
        return {
          bgColor: "bg-blue-50",
          iconColor: "bg-blue-100",
          icon: TrendingUp,
          textColor: "text-blue-600",
          borderColor: "border-blue-200"
        };
    }
  };

  const cardStyle = getCardStyle(label);
  const Icon = cardStyle.icon;

  return (
    <Card className={`w-full shadow-sm border ${cardStyle.bgColor} ${cardStyle.borderColor} hover:shadow-md transition-shadow duration-200`}>
      <CardContent className="p-3">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <p className="text-xs font-medium text-gray-600">{label}</p>
            <p className="text-xl font-bold text-gray-900">{currency(value)}</p>
            <div className="flex items-center gap-1">
              <span
                className={`text-xs font-medium ${
                  positive ? "text-green-600" : "text-red-600"
                }`}
              >
                {positive ? "+" : ""}
                {currency(diff)}
              </span>
              <span
                className={`text-xs ${
                  positive ? "text-green-500" : "text-red-500"
                }`}
              >
                ({pct}%)
              </span>
            </div>
          </div>
          <div className={`p-2 ${cardStyle.iconColor} rounded-lg`}>
            <Icon className={`h-5 w-5 ${cardStyle.textColor}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
