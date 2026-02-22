import { MapPin, Star, TrendingUp, Eye } from "lucide-react";
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardHeader from "@/components/DashboardHeader";
import DestinationCard from "@/components/DestinationCard";

import destSantorini from "@/assets/dest-santorini.jpg";
import destBali from "@/assets/dest-bali.jpg";
import destAlps from "@/assets/dest-alps.jpg";
import destMaldives from "@/assets/dest-maldives.jpg";

const allDestinations = [
  { image: destSantorini, name: "Santorini", country: "Greece", bookings: 342, rating: 4.9 },
  { image: destMaldives, name: "Maldives", country: "Maldives", bookings: 289, rating: 4.8 },
  { image: destBali, name: "Bali", country: "Indonesia", bookings: 256, rating: 4.7 },
  { image: destAlps, name: "Swiss Alps", country: "Switzerland", bookings: 198, rating: 4.9 },
  { image: destSantorini, name: "Mykonos", country: "Greece", bookings: 175, rating: 4.6 },
  { image: destMaldives, name: "Seychelles", country: "Seychelles", bookings: 163, rating: 4.8 },
  { image: destBali, name: "Phuket", country: "Thailand", bookings: 221, rating: 4.5 },
  { image: destAlps, name: "Dolomites", country: "Italy", bookings: 145, rating: 4.7 },
];

const stats = [
  { label: "Total Destinations", value: "56", icon: MapPin },
  { label: "Avg Rating", value: "4.7", icon: Star },
  { label: "Trending", value: "12", icon: TrendingUp },
  { label: "Page Views", value: "24.5K", icon: Eye },
];

const Destinations = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <main className="flex-1 overflow-auto">
        <DashboardHeader />
        <div className="px-8 py-6 space-y-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={s.label} className="bg-card rounded-xl border border-border p-5 opacity-0 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <s.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{s.label}</span>
                </div>
                <p className="text-2xl font-bold font-display text-foreground">{s.value}</p>
              </div>
            ))}
          </div>

          <h2 className="text-lg font-semibold font-display text-foreground">All Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {allDestinations.map((dest, i) => (
              <DestinationCard key={dest.name} {...dest} delay={200 + i * 80} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Destinations;
