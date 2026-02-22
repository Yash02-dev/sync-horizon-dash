import { Settings, User, Bell, Shield } from "lucide-react";
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardHeader from "@/components/DashboardHeader";

const SettingsPage = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <main className="flex-1 overflow-auto">
        <DashboardHeader />
        <div className="px-8 py-6 space-y-6">
          <h2 className="text-xl font-bold font-display text-foreground">Settings</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Profile */}
            <div className="bg-card rounded-xl border border-border p-6 opacity-0 animate-fade-in">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <User className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-semibold font-display text-foreground">Profile</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground block mb-1">Company Name</label>
                  <input defaultValue="Sync Holidays" className="w-full px-3 py-2 rounded-lg bg-background border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-1">Email</label>
                  <input defaultValue="admin@syncholidays.com" className="w-full px-3 py-2 rounded-lg bg-background border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-1">Phone</label>
                  <input defaultValue="+91 98765 43210" className="w-full px-3 py-2 rounded-lg bg-background border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-card rounded-xl border border-border p-6 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Bell className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-semibold font-display text-foreground">Notifications</h3>
              </div>
              <div className="space-y-4">
                {["New booking alerts", "Payment confirmations", "Customer reviews", "Tour updates"].map((item) => (
                  <label key={item} className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm text-foreground">{item}</span>
                    <div className="w-10 h-6 bg-primary rounded-full relative">
                      <div className="w-4 h-4 bg-primary-foreground rounded-full absolute right-1 top-1" />
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Security */}
            <div className="bg-card rounded-xl border border-border p-6 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-semibold font-display text-foreground">Security</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground block mb-1">Current Password</label>
                  <input type="password" placeholder="••••••••" className="w-full px-3 py-2 rounded-lg bg-background border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-1">New Password</label>
                  <input type="password" placeholder="••••••••" className="w-full px-3 py-2 rounded-lg bg-background border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
              </div>
            </div>

            {/* General */}
            <div className="bg-card rounded-xl border border-border p-6 opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Settings className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-semibold font-display text-foreground">General</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground block mb-1">Currency</label>
                  <select className="w-full px-3 py-2 rounded-lg bg-background border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30">
                    <option>USD ($)</option>
                    <option>EUR (€)</option>
                    <option>INR (₹)</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-1">Timezone</label>
                  <select className="w-full px-3 py-2 rounded-lg bg-background border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30">
                    <option>Asia/Kolkata (IST)</option>
                    <option>America/New_York (EST)</option>
                    <option>Europe/London (GMT)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
