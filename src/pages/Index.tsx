import { MapPin, Users, Calendar, DollarSign } from "lucide-react";
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardHeader from "@/components/DashboardHeader";
import StatsCard from "@/components/StatsCard";
import RecentBookings from "@/components/RecentBookings";
import DestinationCard from "@/components/DestinationCard";

import destSantorini from "@/assets/dest-santorini.jpg";
import destBali from "@/assets/dest-bali.jpg";
import destAlps from "@/assets/dest-alps.jpg";
import destMaldives from "@/assets/dest-maldives.jpg";

const stats = [
  { title: "Total Bookings", value: "1,248", change: "+12.5%", trend: "up" as const, icon: Calendar },
  { title: "Revenue", value: "$284,500", change: "+8.2%", trend: "up" as const, icon: DollarSign },
  { title: "Destinations", value: "56", change: "+3", trend: "up" as const, icon: MapPin },
  { title: "Customers", value: "3,672", change: "-2.1%", trend: "down" as const, icon: Users },
];

const destinations = [
  { image: destSantorini, name: "Santorini", country: "Greece", bookings: 342, rating: 4.9 },
  { image: destMaldives, name: "Maldives", country: "Maldives", bookings: 289, rating: 4.8 },
  { image: destBali, name: "Bali", country: "Indonesia", bookings: 256, rating: 4.7 },
  { image: destAlps, name: "Swiss Alps", country: "Switzerland", bookings: 198, rating: 4.9 },
];

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <main className="flex-1 overflow-auto">
        <DashboardHeader />

        <div className="px-8 py-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <StatsCard key={stat.title} {...stat} delay={i * 100} />
            ))}
          </div>

          {/* Bookings + Destinations */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <RecentBookings />
            </div>
            <div>
              <h2 className="text-lg font-semibold font-display text-foreground mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "500ms" }}>
                Popular Destinations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4">
                {destinations.map((dest, i) => (
                  <DestinationCard key={dest.name} {...dest} delay={600 + i * 100} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
