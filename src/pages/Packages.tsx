import { Globe, Tag, TrendingUp, Star } from "lucide-react";
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardHeader from "@/components/DashboardHeader";

const packages = [
  { name: "Honeymoon Special", destinations: "Maldives + Bali", duration: "12 Days", price: "$6,200", sold: 84, category: "Romance" },
  { name: "Family Fun Pack", destinations: "Swiss Alps + Italy", duration: "10 Days", price: "$8,500", sold: 62, category: "Family" },
  { name: "Backpacker's Dream", destinations: "Thailand + Vietnam + Cambodia", duration: "21 Days", price: "$2,100", sold: 156, category: "Adventure" },
  { name: "Luxury Retreat", destinations: "Santorini + Mykonos", duration: "7 Days", price: "$5,800", sold: 43, category: "Luxury" },
  { name: "Cultural Explorer", destinations: "Japan + South Korea", duration: "14 Days", price: "$4,500", sold: 97, category: "Culture" },
  { name: "Beach Paradise", destinations: "Seychelles + Mauritius", duration: "9 Days", price: "$7,100", sold: 38, category: "Relaxation" },
];

const categoryStyles: Record<string, string> = {
  Romance: "bg-accent/10 text-accent",
  Family: "bg-primary/10 text-primary",
  Adventure: "bg-success/10 text-success",
  Luxury: "bg-warning/10 text-warning",
  Culture: "bg-secondary text-secondary-foreground",
  Relaxation: "bg-primary/10 text-primary",
};

const stats = [
  { label: "Total Packages", value: "32", icon: Globe },
  { label: "Categories", value: "6", icon: Tag },
  { label: "Trending", value: "8", icon: TrendingUp },
  { label: "Top Rated", value: "4.8", icon: Star },
];

const Packages = () => {
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

          <div className="bg-card rounded-xl border border-border shadow-sm opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="p-5 border-b border-border">
              <h2 className="text-lg font-semibold font-display text-foreground">Travel Packages</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 text-muted-foreground font-medium">Package</th>
                    <th className="text-left p-4 text-muted-foreground font-medium">Destinations</th>
                    <th className="text-left p-4 text-muted-foreground font-medium">Duration</th>
                    <th className="text-left p-4 text-muted-foreground font-medium">Category</th>
                    <th className="text-left p-4 text-muted-foreground font-medium">Sold</th>
                    <th className="text-right p-4 text-muted-foreground font-medium">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {packages.map((p) => (
                    <tr key={p.name} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-medium text-foreground">{p.name}</td>
                      <td className="p-4 text-muted-foreground">{p.destinations}</td>
                      <td className="p-4 text-muted-foreground">{p.duration}</td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${categoryStyles[p.category]}`}>{p.category}</span>
                      </td>
                      <td className="p-4 text-foreground font-semibold">{p.sold}</td>
                      <td className="p-4 text-right font-bold text-primary">{p.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Packages;
