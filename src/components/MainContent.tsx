import Dashboard from "@/pages/Dashboard";
import Expenses from "@/pages/Expenses";
import Revenue from "@/pages/Revenue";
import Profit from "@/pages/Profit";

interface MainContentProps {
  selectedPage: string;
}

export default function MainContent({ selectedPage }: MainContentProps) {
  const renderPage = () => {
    switch (selectedPage) {
      case "dashboard":
        return <Dashboard />;
      case "expenses":
        return <Expenses />;
      case "revenue":
        return <Revenue />;
      case "profit":
        return <Profit />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="p-6">
        {renderPage()}
      </div>
    </div>
  );
}
