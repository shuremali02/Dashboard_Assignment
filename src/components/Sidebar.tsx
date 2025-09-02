import { Button } from "./ui/button";
import { 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  Home
} from "lucide-react";

interface SidebarProps {
  setSelectedPage: (page: string) => void;
  selectedPage: string;
}

export default function Sidebar({ setSelectedPage, selectedPage }: SidebarProps) {
  const menuItems = [
    { key: "dashboard", label: "Dashboard", icon: Home },
    { key: "revenue", label: "Revenue", icon: DollarSign },
    { key: "expenses", label: "Expenses", icon: TrendingUp },
    { key: "profit", label: "Profit", icon: BarChart3 },
  ];

  return (
    <aside className="flex flex-col p-6 space-y-4 h-full">
      {/* Logo/Brand */}
      <div className="mb-8">
        <h2 className=" font-semibold text-white">Analytics</h2>
        <p className="text-blue-200 text-sm">Business Dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.key}
              onClick={() => setSelectedPage(item.key)}
              variant={selectedPage === item.key ? "secondary" : "ghost"}
              className={`justify-start w-full h-12 text-left transition-all duration-200 ${
                selectedPage === item.key
                  ? "bg-white text-blue-600 shadow-lg hover:bg-gray-50"
                  : "text-black hover:bg-blue-500"
              }`}
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.label}
            </Button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="pt-4 border-t border-blue-500">
        <p className="text-blue-200 text-xs text-center">
          © 2024 Analytics Dashboard
        </p>
      </div>
    </aside>
  );
}
