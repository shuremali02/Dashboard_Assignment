import { Button } from "@/components/ui/button";

interface SidebarProps {
  setSelectedPage: (page: string) => void;
  selectedPage: string;
}

export default function Sidebar({ setSelectedPage, selectedPage }: SidebarProps) {
  const menuItems = [
    { key: "main", label: "Main" },
    { key: "revenue", label: "Revenue" },
    { key: "expenses", label: "Expenses" },
    { key: "profit", label: "Profit" },
  ];

  return (
    <aside className="flex flex-col p-4 space-y-3 h-full">
      {menuItems.map((item) => (
        <Button
          key={item.key}
          onClick={() => setSelectedPage(item.key)}
          variant={selectedPage === item.key ? "secondary" : "ghost"}
          className={`justify-start w-full ${
            selectedPage === item.key
              ? "bg-blue-800 hover:bg-blue-700 text-blue-800"
              : "text-black hover:bg-blue-500"
          }`}
        >
          {item.label}
        </Button>
      ))}
    </aside>
  );
}
