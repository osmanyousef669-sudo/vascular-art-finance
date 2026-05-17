"use client";
import { useLang } from "@/contexts/LangContext";
import TransactionTable from "@/components/TransactionTable";
import { STATS } from "@/lib/data";

export default function TransactionsPage() {
  const { t } = useLang();
  const net = STATS.totalIncome - STATS.totalExpense;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: [t("إجمالي وارد", "Total In")], value: `${STATS.totalIncome.toLocaleString()} AED`, color: "text-success" },
          { label: [t("إجمالي صادر", "Total Out")], value: `${STATS.totalExpense.toLocaleString()} AED`, color: "text-danger" },
          { label: [t("الصافي", "Net")], value: `${net.toLocaleString()} AED`, color: "text-primary" },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-slate-500 font-semibold">{s.label}</p>
            <p className={`text-xl font-extrabold font-mono mt-1 ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h3 className="text-base font-bold text-slate-700 mb-4">
          {t("سجل الحركات المالية", "Transaction History")}
        </h3>
        <TransactionTable showFilters />
      </div>
    </div>
  );
}
