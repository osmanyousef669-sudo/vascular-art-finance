"use client";

interface StatCardProps {
  label: string;
  value: string;
  sub?: string;
  variant?: "default" | "income" | "expense" | "warning";
  icon?: string;
}

const BORDER: Record<string, string> = {
  default: "border-primary",
  income: "border-success",
  expense: "border-danger",
  warning: "border-warning",
};
const VALUE_COLOR: Record<string, string> = {
  default: "text-slate-800",
  income: "text-success",
  expense: "text-danger",
  warning: "text-warning",
};
const BG: Record<string, string> = {
  default: "bg-white",
  income: "bg-white",
  expense: "bg-white",
  warning: "bg-amber-50",
};

export default function StatCard({ label, value, sub, variant = "default", icon }: StatCardProps) {
  return (
    <div
      className={`${BG[variant]} rounded-2xl p-5 shadow-sm border-r-4 ${BORDER[variant]} hover:-translate-y-0.5 hover:shadow-md transition-all`}
    >
      <div className="flex items-start justify-between mb-2">
        <span className="text-sm font-semibold text-slate-500">{label}</span>
        {icon && <span className="text-2xl">{icon}</span>}
      </div>
      <div className={`text-2xl font-extrabold font-mono ${VALUE_COLOR[variant]}`}>{value}</div>
      {sub && <p className="text-xs text-slate-400 mt-1.5">{sub}</p>}
    </div>
  );
}
