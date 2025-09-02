import { Button } from "@/components/ui/button";
import { Menu, Bell, Search, User } from "lucide-react";

interface HeaderProps {
  onMenuClick?: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 shadow-sm flex items-center justify-between px-6 z-50">
      <div className="flex items-center gap-4">
        
        
        {/* Brand */}
        <div className="hidden sm:block">
          <h3 className="text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Business Analytics Dashboard
          </h3>
        </div>
      </div>

      {/* Right side actions */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <Button variant="ghost" size="icon" className="hover:bg-gray-100">
          <Search className="h-5 w-5" />
        </Button>
        
        {/* Notifications */}
        <Button variant="ghost" size="icon" className="hover:bg-gray-100 relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
        </Button>
        
        {/* Profile */}
        <Button variant="ghost" size="icon" className="hover:bg-gray-100">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
