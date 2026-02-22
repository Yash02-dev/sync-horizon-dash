import { Plane, Clock, Users, DollarSign } from "lucide-react";
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardHeader from "@/components/DashboardHeader";

import destSantorini from "@/assets/dest-santorini.jpg";
import destBali from "@/assets/dest-bali.jpg";
import destAlps from "@/assets/dest-alps.jpg";
import destMaldives from "@/assets/dest-maldives.jpg";

const tours = [
  { image: destSantorini, name: "Greek Island Hopping", duration: "7 Days", price: "$2,499", capacity: 20, booked: 16, status: "Active" },
  { image: destMaldives, name: "Maldives Luxury Escape", duration: "5 Days", price: "$4,200", capacity: 12, booked: 12, status: "Full" },
  { image: destBali, name: "Bali Cultural Journey", duration: "10 Days", price: "$1,899", capacity: 25, booked: 18, status: "Active" },
  { image: destAlps, name: "Alpine Adventure Trek", duration: "6 Days", price: "$3,100", capacity: 15, booked: 9, status: "Active" },
  { image: destSantorini, name: "Mediterranean Cruise", duration: "12 Days", price: "$5,500", capacity: 30, booked: 28, status: "Almost Full" },
  { image: destBali, name: "Southeast Asia Explorer", duration: "14 Days", price: "$2,800", capacity: 20, booked: 5, status: "Active" },
];

const statusStyles: Record<string, string> = {
  Active: "bg-success/10 text-success",
  Full: "bg-destructive/10 text-destructive",
  "Almost Full": "bg-warning/10 text-warning",
};

const stats = [
  { label: "Active Tours", value: "24", icon: Plane },
  { label: "Avg Duration", value: "8 Days", icon: Clock },
  { label: "Total Travelers", value: "486", icon: Users },
  { label: "Revenue", value: "$142K", icon: DollarSign },
];

const Tours = () => {
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

          <h2 className="text-lg font-semibold font-display text-foreground">Tour Packages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tours.map((tour, i) => (
              <div key={tour.name} className="bg-card rounded-xl border border-border shadow-sm overflow-hidden opacity-0 animate-fade-in group cursor-pointer" style={{ animationDelay: `${200 + i * 80}ms` }}>
                <div className="h-40 overflow-hidden">
                  <img src={tour.image} alt={tour.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold font-display text-foreground">{tour.name}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusStyles[tour.status]}`}>{tour.status}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {tour.duration}</span>
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {tour.booked}/{tour.capacity}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary font-display">{tour.price}</span>
                    <span className="text-xs text-muted-foreground">per person</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tours;
