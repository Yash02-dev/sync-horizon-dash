import { Calendar, Clock, CheckCircle, XCircle } from "lucide-react";
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardHeader from "@/components/DashboardHeader";

const bookings = [
  { id: "BK-1024", customer: "Rahul Sharma", destination: "Maldives", date: "Feb 18, 2026", status: "Confirmed", amount: "$3,250", travelers: 2 },
  { id: "BK-1023", customer: "Priya Patel", destination: "Santorini", date: "Feb 17, 2026", status: "Pending", amount: "$2,800", travelers: 4 },
  { id: "BK-1022", customer: "Amit Kumar", destination: "Swiss Alps", date: "Feb 16, 2026", status: "Confirmed", amount: "$4,100", travelers: 3 },
  { id: "BK-1021", customer: "Sara Ali", destination: "Bali", date: "Feb 15, 2026", status: "Cancelled", amount: "$1,950", travelers: 2 },
  { id: "BK-1020", customer: "Vikram Singh", destination: "Maldives", date: "Feb 14, 2026", status: "Confirmed", amount: "$3,500", travelers: 1 },
  { id: "BK-1019", customer: "Neha Gupta", destination: "Phuket", date: "Feb 13, 2026", status: "Confirmed", amount: "$2,100", travelers: 2 },
  { id: "BK-1018", customer: "Arjun Reddy", destination: "Santorini", date: "Feb 12, 2026", status: "Pending", amount: "$3,900", travelers: 5 },
  { id: "BK-1017", customer: "Kavita Nair", destination: "Swiss Alps", date: "Feb 11, 2026", status: "Confirmed", amount: "$5,200", travelers: 4 },
];

const statusStyles: Record<string, string> = {
  Confirmed: "bg-success/10 text-success",
  Pending: "bg-warning/10 text-warning",
  Cancelled: "bg-destructive/10 text-destructive",
};

const stats = [
  { label: "Total Bookings", value: "1,248", icon: Calendar },
  { label: "Pending", value: "38", icon: Clock },
  { label: "Confirmed", value: "1,142", icon: CheckCircle },
  { label: "Cancelled", value: "68", icon: XCircle },
];

const Bookings = () => {
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
              <h2 className="text-lg font-semibold font-display text-foreground">All Bookings</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 text-muted-foreground font-medium">ID</th>
                    <th className="text-left p-4 text-muted-foreground font-medium">Customer</th>
                    <th className="text-left p-4 text-muted-foreground font-medium">Destination</th>
                    <th className="text-left p-4 text-muted-foreground font-medium">Travelers</th>
                    <th className="text-left p-4 text-muted-foreground font-medium">Date</th>
                    <th className="text-left p-4 text-muted-foreground font-medium">Status</th>
                    <th className="text-right p-4 text-muted-foreground font-medium">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b) => (
                    <tr key={b.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-medium text-foreground">{b.id}</td>
                      <td className="p-4 text-foreground">{b.customer}</td>
                      <td className="p-4 text-muted-foreground">{b.destination}</td>
                      <td className="p-4 text-muted-foreground">{b.travelers}</td>
                      <td className="p-4 text-muted-foreground">{b.date}</td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[b.status]}`}>{b.status}</span>
                      </td>
                      <td className="p-4 text-right font-semibold text-foreground">{b.amount}</td>
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

export default Bookings;
