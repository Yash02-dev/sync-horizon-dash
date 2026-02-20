const bookings = [
  { id: "BK-1024", customer: "Rahul Sharma", destination: "Maldives", date: "Feb 18, 2026", status: "Confirmed", amount: "$3,250" },
  { id: "BK-1023", customer: "Priya Patel", destination: "Santorini", date: "Feb 17, 2026", status: "Pending", amount: "$2,800" },
  { id: "BK-1022", customer: "Amit Kumar", destination: "Swiss Alps", date: "Feb 16, 2026", status: "Confirmed", amount: "$4,100" },
  { id: "BK-1021", customer: "Sara Ali", destination: "Bali", date: "Feb 15, 2026", status: "Cancelled", amount: "$1,950" },
  { id: "BK-1020", customer: "Vikram Singh", destination: "Maldives", date: "Feb 14, 2026", status: "Confirmed", amount: "$3,500" },
];

const statusStyles: Record<string, string> = {
  Confirmed: "bg-success/10 text-success",
  Pending: "bg-warning/10 text-warning",
  Cancelled: "bg-destructive/10 text-destructive",
};

const RecentBookings = () => {
  return (
    <div className="bg-card rounded-xl border border-border shadow-sm opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
      <div className="p-5 border-b border-border">
        <h2 className="text-lg font-semibold font-display text-foreground">Recent Bookings</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-4 text-muted-foreground font-medium">Booking ID</th>
              <th className="text-left p-4 text-muted-foreground font-medium">Customer</th>
              <th className="text-left p-4 text-muted-foreground font-medium">Destination</th>
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
                <td className="p-4 text-muted-foreground">{b.date}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[b.status]}`}>
                    {b.status}
                  </span>
                </td>
                <td className="p-4 text-right font-semibold text-foreground">{b.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentBookings;
