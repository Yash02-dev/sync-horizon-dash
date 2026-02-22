import { Users, UserPlus, UserCheck, Star } from "lucide-react";
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardHeader from "@/components/DashboardHeader";

const customers = [
  { name: "Rahul Sharma", email: "rahul@email.com", trips: 8, spent: "$18,400", joined: "Jan 2024", status: "VIP" },
  { name: "Priya Patel", email: "priya@email.com", trips: 5, spent: "$12,300", joined: "Mar 2024", status: "Active" },
  { name: "Amit Kumar", email: "amit@email.com", trips: 12, spent: "$31,600", joined: "Sep 2023", status: "VIP" },
  { name: "Sara Ali", email: "sara@email.com", trips: 3, spent: "$7,200", joined: "Jun 2024", status: "Active" },
  { name: "Vikram Singh", email: "vikram@email.com", trips: 6, spent: "$15,800", joined: "Nov 2023", status: "Active" },
  { name: "Neha Gupta", email: "neha@email.com", trips: 4, spent: "$9,500", joined: "Feb 2025", status: "New" },
  { name: "Arjun Reddy", email: "arjun@email.com", trips: 9, spent: "$22,100", joined: "Jul 2023", status: "VIP" },
  { name: "Kavita Nair", email: "kavita@email.com", trips: 2, spent: "$5,800", joined: "Dec 2025", status: "New" },
];

const statusStyles: Record<string, string> = {
  VIP: "bg-accent/10 text-accent",
  Active: "bg-success/10 text-success",
  New: "bg-primary/10 text-primary",
};

const stats = [
  { label: "Total Customers", value: "3,672", icon: Users },
  { label: "New This Month", value: "124", icon: UserPlus },
  { label: "Active", value: "2,891", icon: UserCheck },
  { label: "VIP Members", value: "342", icon: Star },
];

const Customers = () => {
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
              <h2 className="text-lg font-semibold font-display text-foreground">Customer Directory</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 text-muted-foreground font-medium">Name</th>
                    <th className="text-left p-4 text-muted-foreground font-medium">Email</th>
                    <th className="text-left p-4 text-muted-foreground font-medium">Trips</th>
                    <th className="text-left p-4 text-muted-foreground font-medium">Total Spent</th>
                    <th className="text-left p-4 text-muted-foreground font-medium">Joined</th>
                    <th className="text-left p-4 text-muted-foreground font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((c) => (
                    <tr key={c.email} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-medium text-foreground">{c.name}</td>
                      <td className="p-4 text-muted-foreground">{c.email}</td>
                      <td className="p-4 text-foreground font-semibold">{c.trips}</td>
                      <td className="p-4 text-foreground font-semibold">{c.spent}</td>
                      <td className="p-4 text-muted-foreground">{c.joined}</td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[c.status]}`}>{c.status}</span>
                      </td>
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

export default Customers;
