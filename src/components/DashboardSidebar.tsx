import { 
  LayoutDashboard, MapPin, Calendar, Users, Settings, 
  TrendingUp, Globe, Plane, HelpCircle, LogOut 
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: MapPin, label: "Destinations" },
  { icon: Calendar, label: "Bookings" },
  { icon: Users, label: "Customers" },
  { icon: Plane, label: "Tours" },
  { icon: Globe, label: "Packages" },
  { icon: TrendingUp, label: "Analytics" },
];

const bottomItems = [
  { icon: Settings, label: "Settings" },
  { icon: HelpCircle, label: "Help" },
  { icon: LogOut, label: "Log Out" },
];

const DashboardSidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-sidebar flex flex-col">
      {/* Logo / Brand */}
      <div className="p-6 flex items-center gap-3">
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
        {navItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
              item.active
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-muted hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
            )}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </button>
        ))}
      </nav>

      {/* Bottom */}
      <div className="px-3 pb-6 space-y-1">
        {bottomItems.map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-sidebar-muted hover:bg-sidebar-accent/50 hover:text-sidebar-foreground transition-all"
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default DashboardSidebar;
