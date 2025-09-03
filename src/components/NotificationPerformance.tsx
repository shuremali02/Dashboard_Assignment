import { Card, CardContent } from "./ui/card";

interface NotificationProps {
  profitThisYear: number;
  profitLastYear: number;
}

export default function PerformanceNotification({
  profitThisYear,
  profitLastYear,
}: NotificationProps) {
  if (!profitThisYear || !profitLastYear) return null;

  const diffPercent = ((profitThisYear - profitLastYear) / profitLastYear) * 100;

  if (diffPercent <= -20) {
    return (
      <Card className="border-red-500 bg-red-50">
        <CardContent className="p-3 text-red-700 font-medium">
          ⚠️ Warning: Profit has dropped by{" "}
          {Math.abs(diffPercent).toFixed(1)}% compared to last year.
        </CardContent>
      </Card>
    );
  }

  if (diffPercent >= 15) {
    return (
      <Card className="border-green-500 bg-green-50">
        <CardContent className="p-3 text-green-700 font-medium">
          ✅ Excellent Performance: Profit increased by{" "}
          {diffPercent.toFixed(1)}% compared to last year!
        </CardContent>
      </Card>
    );
  }

  return null;
}
