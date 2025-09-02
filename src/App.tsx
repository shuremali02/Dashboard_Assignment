import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { FilterProvider } from "./components/context/FilterContext";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState("dashboard");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <FilterProvider>
      <div className="h-screen w-full flex flex-col bg-gray-50">
        {/* Header */}
        <Header onMenuClick={toggleSidebar} />

        <div className="flex flex-1 pt-16">
          {/* Sidebar */}
          <div
            className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-gradient-to-b from-blue-600 to-blue-700 shadow-xl transition-transform duration-300 ease-in-out z-40 ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } lg:relative lg:translate-x-0 lg:sticky lg:top-16`}
          >
            <Sidebar
              setSelectedPage={setSelectedPage}
              selectedPage={selectedPage}
            />
          </div>

          {/* Overlay for mobile */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
              onClick={toggleSidebar}
            />
          )}

          {/* Main content - Scrollable */}
          <div className="flex-1 min-w-0 overflow-hidden">
            <MainContent selectedPage={selectedPage} />
          </div>
        </div>
      </div>
    </FilterProvider>
  );
}
