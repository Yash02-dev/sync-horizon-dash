import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
  delay?: number;
}

const StatsCard = ({ title, value, change, trend, icon: Icon, delay = 0 }: StatsCardProps) => {
  return (
    <div
      className="bg-card rounded-xl p-5 shadow-sm border border-border opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-muted-foreground font-medium">{title}</span>
        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-4 h-4 text-primary" />
        </div>
      </div>
      <p className="text-2xl font-bold text-foreground font-display">{value}</p>
      <div className="flex items-center gap-1 mt-1">
        {trend === "up" ? (
          <TrendingUp className="w-3.5 h-3.5 text-success" />
        ) : (
          <TrendingDown className="w-3.5 h-3.5 text-destructive" />
        )}
        <span
          className={cn(
            "text-xs font-medium",
            trend === "up" ? "text-success" : "text-destructive"
          )}
        >
          {change}
        </span>
        <span className="text-xs text-muted-foreground">vs last month</span>
      </div>
    </div>
  );
};

export default StatsCard;
