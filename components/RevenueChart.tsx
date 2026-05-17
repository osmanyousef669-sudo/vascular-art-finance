"use client";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { MONTHLY_REVENUE } from "@/lib/data";
import { useLang } from "@/contexts/LangContext";

const fmt = (v: number) =>
  v >= 1000 ? `${(v / 1000).toFixed(0)}K` : String(v);

export default function RevenueChart() {
  const { t } = useLang();
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-base font-bold text-slate-700 mb-4">
        {t("الإيرادات والمصروفات الشهرية", "Monthly Revenue & Expenses")}
      </h3>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={MONTHLY_REVENUE} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0d9488" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#0d9488" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="expenseGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#dc2626" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#dc2626" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="month" tick={{ fontSize: 11 }} tickFormatter={(v) => v.split(" / ")[0]} />
          <YAxis tick={{ fontSize: 11 }} tickFormatter={fmt} />
          <Tooltip formatter={(v: number) => [`${v.toLocaleString()} AED`, ""]} />
          <Legend />
          <Area
            type="monotone"
            dataKey="income"
            name={t("وارد", "Income")}
            stroke="#0d9488"
            strokeWidth={2}
            fill="url(#incomeGrad)"
          />
          <Area
            type="monotone"
            dataKey="expense"
            name={t("صادر", "Expense")}
            stroke="#dc2626"
            strokeWidth={2}
            fill="url(#expenseGrad)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
