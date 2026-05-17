"use client";
import Link from "next/link";
import { useLang } from "@/contexts/LangContext";
import { STATS } from "@/lib/data";
import StatCard from "@/components/StatCard";
import RevenueChart from "@/components/RevenueChart";
import IncomeSourceChart from "@/components/IncomeSourceChart";
import TransactionTable from "@/components/TransactionTable";

export default function DashboardPage() {
  const { t } = useLang();

  const fmt = (n: number) => `${n.toLocaleString()} AED`;

  return (
    <div className="space-y-6">
      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard
          label={t("إجمالي الإيرادات", "Total Revenue")}
          value={fmt(STATS.totalIncome)}
          sub={t("السنة الحالية 2026", "Current Year 2026")}
          variant="income"
          icon="💰"
        />
        <StatCard
          label={t("إجمالي المصروفات", "Total Expenses")}
          value={fmt(STATS.totalExpense)}
          sub={t("السنة الحالية 2026", "Current Year 2026")}
          variant="expense"
          icon="💸"
        />
        <StatCard
          label={t("صافي الرصيد", "Net Balance")}
          value={fmt(STATS.netBalance)}
          sub={t("الربح الصافي", "Net Profit")}
          variant="default"
          icon="📈"
        />
        <StatCard
          label={t("تأمين معلق", "Pending Insurance")}
          value={fmt(STATS.pendingInsurance)}
          sub={t("في انتظار التسوية", "Awaiting settlement")}
          variant="warning"
          icon="⏳"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        <div className="xl:col-span-2">
          <RevenueChart />
        </div>
        <div>
          <IncomeSourceChart />
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-slate-700">
            {t("آخر الحركات المالية", "Recent Transactions")}
          </h3>
          <Link
            href="/transactions"
            className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            {t("عرض الكل ←", "View All →")}
          </Link>
        </div>
        <TransactionTable limit={5} />
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {
            href: "/transactions",
            icon: "💳",
            labelAr: "الحركات المالية",
            labelEn: "Transactions",
            subAr: "عرض جميع الحركات والفلترة",
            subEn: "View and filter all transactions",
            color: "from-teal-500 to-teal-700",
          },
          {
            href: "/reports",
            icon: "📄",
            labelAr: "التقارير والوثائق",
            labelEn: "Reports & Documents",
            subAr: "التقارير السنوية والفصلية",
            subEn: "Annual and quarterly reports",
            color: "from-amber-500 to-amber-700",
          },
          {
            href: "/contact",
            icon: "👥",
            labelAr: "فريق علاقات المستثمرين",
            labelEn: "IR Team",
            subAr: "تواصل مع الفريق المالي",
            subEn: "Contact the finance team",
            color: "from-slate-600 to-slate-800",
          },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`bg-gradient-to-br ${item.color} text-white rounded-2xl p-5 hover:opacity-90 transition-opacity`}
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <div className="font-bold text-base">{t(item.labelAr, item.labelEn)}</div>
            <div className="text-xs opacity-75 mt-1">{t(item.subAr, item.subEn)}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
