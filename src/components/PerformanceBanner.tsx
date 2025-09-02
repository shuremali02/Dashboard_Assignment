import { Card, CardContent } from "@/components/ui/card";

interface BannerProps {
  type: "success" | "danger";
  text: string;
}

export default function PerformanceBanner({ type, text }: BannerProps) {
  if (!text) return null;
  return (
    <Card className={type === "success" ? "border-green-500" : "border-red-500"}>
      <CardContent className={`p-3 ${type === "success" ? "text-green-700" : "text-red-700"}`}>
        {text}
      </CardContent>
    </Card>
  );
}
