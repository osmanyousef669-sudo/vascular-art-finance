"use client";
import { useState } from "react";
import { useLang } from "@/contexts/LangContext";
import { LIABILITIES, STATS, Liability } from "@/lib/data";

const STATUS_STYLES: Record<Liability["status"], string> = {
  paid: "bg-emerald-100 text-emerald-700",
  unpaid: "bg-amber-100 text-amber-700",
  overdue: "bg-red-100 text-red-700",
};

const STATUS_LABELS: Record<Liability["status"], [string, string]> = {
  paid: ["مسدد", "Paid"],
  unpaid: ["غير مسدد", "Unpaid"],
  overdue: ["متأخر", "Overdue"],
};

export default function LiabilitiesPage() {
  const { t, dir } = useLang();
  const [status, setStatus] = useState<"all" | Liability["status"]>("all");
  const [search, setSearch] = useState("");

  const filtered = LIABILITIES.filter((l) => {
    const matchStatus = status === "all" || l.status === status;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      l.descAr.includes(q) ||
      l.descEn.toLowerCase().includes(q) ||
      l.entity.toLowerCase().includes(q) ||
      l.categoryAr.includes(q);
    return matchStatus && matchSearch;
  });

  const totalAmount = filtered.reduce((s, l) => s + l.amount, 0);
  const paidAmount = filtered.filter((l) => l.status === "paid").reduce((s, l) => s + l.amount, 0);
  const unpaidAmount = filtered.filter((l) => l.status !== "paid").reduce((s, l) => s + l.amount, 0);

  const today = new Date("2026-05-17");

  const isNearDue = (dueDateStr: string) => {
    if (!dueDateStr) return false;
    const due = new Date(dueDateStr.split("/").reverse().join("-"));
    const diff = (due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
    return diff >= 0 && diff <= 14;
  };

  return (
    <div className="space-y-6" dir={dir}>
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          {t("الالتزامات والمديونيات", "Liabilities & Payables")}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          {t("متابعة الالتزامات المالية والمدفوعات المستحقة", "Track financial obligations and due payments")}
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
            {t("إجمالي الالتزامات", "Total Liabilities")}
          </p>
          <p className="text-2xl font-bold text-gray-900 mt-1">
            {STATS.liabilitiesTotal.toLocaleString("ar-EG")} <span className="text-sm font-normal text-gray-400">EGP</span>
          </p>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
            {t("المسدّد", "Paid")}
          </p>
          <p className="text-2xl font-bold text-emerald-600 mt-1">
            {STATS.liabilitiesPaid.toLocaleString("ar-EG")} <span className="text-sm font-normal text-gray-400">EGP</span>
          </p>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
            {t("غير المسدّد", "Unpaid")}
          </p>
          <p className="text-2xl font-bold text-red-500 mt-1">
            {STATS.liabilitiesUnpaid.toLocaleString("ar-EG")} <span className="text-sm font-normal text-gray-400">EGP</span>
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex flex-wrap gap-3 items-center">
        <input
          type="text"
          placeholder={t("بحث بالوصف أو الجهة...", "Search by description or entity...")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-200 rounded-xl px-4 py-2 text-sm flex-1 min-w-48 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <div className="flex gap-2">
          {(["all", "paid", "unpaid", "overdue"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                status === s
                  ? "bg-teal-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {s === "all"
                ? t("الكل", "All")
                : t(STATUS_LABELS[s as Liability["status"]][0], STATUS_LABELS[s as Liability["status"]][1])}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-4 py-3 text-start font-semibold text-gray-600">{t("الوصف", "Description")}</th>
                <th className="px-4 py-3 text-start font-semibold text-gray-600">{t("الجهة", "Entity")}</th>
                <th className="px-4 py-3 text-start font-semibold text-gray-600">{t("التصنيف", "Category")}</th>
                <th className="px-4 py-3 text-start font-semibold text-gray-600">{t("التاريخ", "Date")}</th>
                <th className="px-4 py-3 text-start font-semibold text-gray-600">{t("تاريخ الاستحقاق", "Due Date")}</th>
                <th className="px-4 py-3 text-end font-semibold text-gray-600">{t("المبلغ", "Amount")}</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-600">{t("الحالة", "Status")}</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-10 text-gray-400">
                    {t("لا توجد نتائج", "No results found")}
                  </td>
                </tr>
              ) : (
                filtered.map((liability) => {
                  const nearDue = liability.status !== "paid" && isNearDue(liability.dueDate);
                  return (
                    <tr
                      key={liability.id}
                      className={`border-b border-gray-50 transition-colors ${
                        nearDue ? "bg-amber-50 hover:bg-amber-100" : "hover:bg-gray-50"
                      }`}
                    >
                      <td className="px-4 py-3">
                        <div className="font-medium text-gray-900">
                          {t(liability.descAr, liability.descEn)}
                        </div>
                        {nearDue && (
                          <div className="text-xs text-amber-600 font-medium mt-0.5">
                            {t("⚠ يستحق قريباً", "⚠ Due soon")}
                          </div>
                        )}
                        {liability.notes && (
                          <div className="text-xs text-gray-400 mt-0.5">{liability.notes}</div>
                        )}
                      </td>
                      <td className="px-4 py-3 text-gray-600">{liability.entity}</td>
                      <td className="px-4 py-3 text-gray-500">
                        {t(liability.categoryAr, liability.categoryEn)}
                      </td>
                      <td className="px-4 py-3 text-gray-500">{liability.date}</td>
                      <td className="px-4 py-3 text-gray-500">
                        {liability.dueDate || "—"}
                      </td>
                      <td className="px-4 py-3 text-end font-semibold text-gray-900">
                        {liability.amount.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${STATUS_STYLES[liability.status]}`}>
                          {t(STATUS_LABELS[liability.status][0], STATUS_LABELS[liability.status][1])}
                        </span>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
        <div className="px-4 py-3 border-t border-gray-100 bg-gray-50 flex justify-between items-center text-xs text-gray-500">
          <span>{t(`عرض ${filtered.length} من ${LIABILITIES.length} التزام`, `Showing ${filtered.length} of ${LIABILITIES.length} liabilities`)}</span>
          <span className="font-semibold text-gray-700">
            {t("الإجمالي:", "Total:")} {totalAmount.toLocaleString()} EGP
          </span>
        </div>
      </div>
    </div>
  );
}
