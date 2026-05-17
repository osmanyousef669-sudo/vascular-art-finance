"use client";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { INCOME_SOURCES } from "@/lib/data";
import { useLang } from "@/contexts/LangContext";

const COLORS = ["#0d9488", "#0f766e", "#f59e0b", "#64748b"];

export default function IncomeSourceChart() {
  const { t } = useLang();
  const data = INCOME_SOURCES.map((s) => ({
    name: t(s.nameAr, s.nameEn),
    value: s.value,
  }));

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-base font-bold text-slate-700 mb-4">
        {t("مصادر الإيرادات", "Income Sources")}
      </h3>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={4}
            dataKey="value"
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(v: number) => [`${v}%`, ""]} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
