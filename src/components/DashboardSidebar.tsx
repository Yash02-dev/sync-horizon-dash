import { 
  LayoutDashboard, MapPin, Calendar, Users, Settings, 
  TrendingUp, Globe, Plane, HelpCircle, LogOut 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: MapPin, label: "Destinations", path: "/destinations" },
  { icon: Calendar, label: "Bookings", path: "/bookings" },
  { icon: Users, label: "Customers", path: "/customers" },
  { icon: Plane, label: "Tours", path: "/tours" },
  { icon: Globe, label: "Packages", path: "/packages" },
  { icon: TrendingUp, label: "Analytics", path: "/analytics" },
];

const bottomItems = [
  { icon: Settings, label: "Settings", path: "/settings" },
  { icon: HelpCircle, label: "Help", path: "" },
  { icon: LogOut, label: "Log Out", path: "" },
];

const DashboardSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <aside className="w-64 min-h-screen bg-sidebar flex flex-col">
      {/* Logo / Brand */}
      <div className="p-6 flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
        <div className="w-10 h-10 rounded-lg bg-sidebar-primary flex items-center justify-center">
          <Plane className="w-5 h-5 text-sidebar-primary-foreground" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-sidebar-foreground font-display tracking-wide">
            Sync Holidays
          </h1>
          <p className="text-xs text-sidebar-muted">Travel Dashboard</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 mt-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-muted hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="px-3 pb-6 space-y-1">
        {bottomItems.map((item) => {
          const isActive = item.path && location.pathname === item.path;
          return (
            <button
              key={item.label}
              onClick={() => item.path && navigate(item.path)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-muted hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default DashboardSidebar;
