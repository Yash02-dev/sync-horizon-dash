import { Bell, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-destination.jpg";

const DashboardHeader = () => {
  const navigate = useNavigate();
  return (
    <header>
      {/* Top Bar */}
      <div className="flex items-center justify-between px-8 py-4">
        <div>
          <h1 className="text-2xl font-bold font-display text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Welcome back! Here's your travel business overview.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-9 pr-4 py-2 rounded-lg bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 w-56"
            />
          </div>
          <button className="relative w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors">
            <Bell className="w-4 h-4 text-muted-foreground" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent text-accent-foreground text-[10px] flex items-center justify-center font-bold">3</span>
          </button>
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
            SH
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="mx-8 rounded-2xl overflow-hidden relative h-44">
        <img src={heroImage} alt="Travel destination" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-transparent flex items-center">
          <div className="px-8">
            <h2 className="text-2xl font-bold font-display text-card">Explore New Destinations</h2>
            <p className="text-card/80 text-sm mt-1 max-w-md">
              Discover curated travel packages and manage your tours all in one place.
            </p>
            <button onClick={() => navigate("/packages")} className="mt-3 px-5 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
              View Packages
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
