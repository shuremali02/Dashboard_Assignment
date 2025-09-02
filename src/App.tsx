import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Dashboard from "@/pages/Dashboard";
import { FilterProvider } from "@/components/context/FilterContext";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState("main");

  return (
    <FilterProvider>
      <div className="h-screen w-full flex flex-col">
        {/* Header */}
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        <div className="flex flex-1 pt-16">
          {/* Sidebar (desktop fixed, mobile toggle) */}
          <div
            className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-56 bg-blue-600 transition-transform duration-300 md:translate-x-0 ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:static md:block`}
          >
            <Sidebar
              setSelectedPage={setSelectedPage}
              selectedPage={selectedPage}
            />
          </div>
  
          {/* Main content */}
          <div className="w-full">
            <Dashboard />
            </div>
        </div>
      </div> 
    </FilterProvider>
  );
}
