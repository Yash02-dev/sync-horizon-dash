import { TrendingUp, DollarSign, Users, MapPin } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardHeader from "@/components/DashboardHeader";

const monthlyRevenue = [
  { month: "Sep", revenue: 32000 },
  { month: "Oct", revenue: 38000 },
  { month: "Nov", revenue: 42000 },
  { month: "Dec", revenue: 55000 },
  { month: "Jan", revenue: 48000 },
  { month: "Feb", revenue: 52000 },
];

const bookingTrend = [
  { month: "Sep", bookings: 180 },
  { month: "Oct", bookings: 210 },
  { month: "Nov", bookings: 195 },
  { month: "Dec", bookings: 280 },
  { month: "Jan", bookings: 240 },
  { month: "Feb", bookings: 265 },
];

const destinationShare = [
  { name: "Maldives", value: 28 },
  { name: "Santorini", value: 22 },
  { name: "Bali", value: 20 },
  { name: "Swiss Alps", value: 15 },
  { name: "Others", value: 15 },
];

const COLORS = ["hsl(199,80%,42%)", "hsl(25,90%,55%)", "hsl(152,60%,42%)", "hsl(38,92%,50%)", "hsl(210,20%,80%)"];

const stats = [
  { label: "Monthly Revenue", value: "$52,000", icon: DollarSign, change: "+8.3%" },
  { label: "Monthly Bookings", value: "265", icon: TrendingUp, change: "+10.4%" },
  { label: "New Customers", value: "124", icon: Users, change: "+15.2%" },
  { label: "Top Destination", value: "Maldives", icon: MapPin, change: "28% share" },
];

const Analytics = () => {
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
                <span className="text-xs text-success font-medium">{s.change}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl border border-border p-5 opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <h3 className="text-base font-semibold font-display text-foreground mb-4">Revenue Overview</h3>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={monthlyRevenue}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(30,20%,90%)" />
                  <XAxis dataKey="month" tick={{ fontSize: 12, fill: "hsl(215,14%,50%)" }} />
                  <YAxis tick={{ fontSize: 12, fill: "hsl(215,14%,50%)" }} />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="hsl(199,80%,42%)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-card rounded-xl border border-border p-5 opacity-0 animate-fade-in" style={{ animationDelay: "500ms" }}>
              <h3 className="text-base font-semibold font-display text-foreground mb-4">Booking Trends</h3>
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={bookingTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(30,20%,90%)" />
                  <XAxis dataKey="month" tick={{ fontSize: 12, fill: "hsl(215,14%,50%)" }} />
                  <YAxis tick={{ fontSize: 12, fill: "hsl(215,14%,50%)" }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="bookings" stroke="hsl(25,90%,55%)" strokeWidth={2.5} dot={{ fill: "hsl(25,90%,55%)", r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-card rounded-xl border border-border p-5 opacity-0 animate-fade-in lg:col-span-2" style={{ animationDelay: "600ms" }}>
              <h3 className="text-base font-semibold font-display text-foreground mb-4">Destination Market Share</h3>
              <div className="flex items-center justify-center gap-8">
                <ResponsiveContainer width={260} height={260}>
                  <PieChart>
                    <Pie data={destinationShare} cx="50%" cy="50%" outerRadius={100} dataKey="value" label={({ name, value }) => `${name} ${value}%`}>
                      {destinationShare.map((_, i) => (
                        <Cell key={i} fill={COLORS[i % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
