"use client";
import { useState } from "react";
import { useLang } from "@/contexts/LangContext";
import { INSURANCE_CLAIMS, STATS, InsuranceClaim } from "@/lib/data";

const STATUS_STYLES: Record<InsuranceClaim["status"], string> = {
  paid: "bg-emerald-100 text-emerald-700",
  pending: "bg-amber-100 text-amber-700",
  overdue: "bg-red-100 text-red-700",
};

const STATUS_LABELS: Record<InsuranceClaim["status"], [string, string]> = {
  paid: ["مسدد", "Paid"],
  pending: ["قيد الانتظار", "Pending"],
  overdue: ["متأخر", "Overdue"],
};

const COMPANIES = ["all", ...Array.from(new Set(INSURANCE_CLAIMS.map((c) => c.company)))];

export default function InsurancePage() {
  const { t, dir } = useLang();
  const [company, setCompany] = useState("all");
  const [status, setStatus] = useState<"all" | InsuranceClaim["status"]>("all");
  const [search, setSearch] = useState("");

  const filtered = INSURANCE_CLAIMS.filter((c) => {
    const matchCompany = company === "all" || c.company === company;
    const matchStatus = status === "all" || c.status === status;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      c.patientAr.includes(q) ||
      c.patientEn.toLowerCase().includes(q) ||
      c.procedureAr.includes(q) ||
      c.doctorAr.includes(q);
    return matchCompany && matchStatus && matchSearch;
  });

  const totalBilled = filtered.reduce((s, c) => s + c.billed, 0);
  const totalReceived = filtered.reduce((s, c) => s + c.received, 0);
  const totalPending = totalBilled - totalReceived;

  return (
    <div className="space-y-6" dir={dir}>
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          {t("المطالبات التأمينية", "Insurance Claims")}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          {t("تتبع مطالبات شركات التأمين والمدفوعات", "Track insurance company claims and payments")}
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
            {t("إجمالي المطالبات", "Total Billed")}
          </p>
          <p className="text-2xl font-bold text-gray-900 mt-1">
            {totalBilled.toLocaleString("ar-EG")} <span className="text-sm font-normal text-gray-400">EGP</span>
          </p>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
            {t("المحصّل", "Received")}
          </p>
          <p className="text-2xl font-bold text-emerald-600 mt-1">
            {totalReceived.toLocaleString("ar-EG")} <span className="text-sm font-normal text-gray-400">EGP</span>
          </p>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
            {t("المتبقي", "Outstanding")}
          </p>
          <p className="text-2xl font-bold text-amber-600 mt-1">
            {totalPending.toLocaleString("ar-EG")} <span className="text-sm font-normal text-gray-400">EGP</span>
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex flex-wrap gap-3 items-center">
        <input
          type="text"
          placeholder={t("بحث بالاسم أو الإجراء...", "Search by patient or procedure...")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-200 rounded-xl px-4 py-2 text-sm flex-1 min-w-48 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <select
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          <option value="all">{t("كل الشركات", "All Companies")}</option>
          {COMPANIES.filter((c) => c !== "all").map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <div className="flex gap-2">
          {(["all", "paid", "pending", "overdue"] as const).map((s) => (
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
                : t(STATUS_LABELS[s][0], STATUS_LABELS[s][1])}
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
                <th className="px-4 py-3 text-start font-semibold text-gray-600">{t("المريض", "Patient")}</th>
                <th className="px-4 py-3 text-start font-semibold text-gray-600">{t("الإجراء", "Procedure")}</th>
                <th className="px-4 py-3 text-start font-semibold text-gray-600">{t("الطبيب", "Doctor")}</th>
                <th className="px-4 py-3 text-start font-semibold text-gray-600">{t("الشركة", "Company")}</th>
                <th className="px-4 py-3 text-start font-semibold text-gray-600">{t("تاريخ الإجراء", "Procedure Date")}</th>
                <th className="px-4 py-3 text-end font-semibold text-gray-600">{t("المطالب به", "Billed")}</th>
                <th className="px-4 py-3 text-end font-semibold text-gray-600">{t("المحصّل", "Received")}</th>
                <th className="px-4 py-3 text-end font-semibold text-gray-600">{t("المتبقي", "Balance")}</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-600">{t("الحالة", "Status")}</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={9} className="text-center py-10 text-gray-400">
                    {t("لا توجد نتائج", "No results found")}
                  </td>
                </tr>
              ) : (
                filtered.map((claim) => {
                  const balance = claim.billed - claim.received;
                  return (
                    <tr key={claim.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        {t(claim.patientAr, claim.patientEn)}
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        {t(claim.procedureAr, claim.procedureEn)}
                      </td>
                      <td className="px-4 py-3 text-gray-600">{claim.doctorAr}</td>
                      <td className="px-4 py-3 text-gray-600">{claim.company}</td>
                      <td className="px-4 py-3 text-gray-500">{claim.procedureDate}</td>
                      <td className="px-4 py-3 text-end font-medium text-gray-900">
                        {claim.billed.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-end text-emerald-600 font-medium">
                        {claim.received.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-end text-amber-600 font-medium">
                        {balance > 0 ? balance.toLocaleString() : "—"}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${STATUS_STYLES[claim.status]}`}>
                          {t(STATUS_LABELS[claim.status][0], STATUS_LABELS[claim.status][1])}
                        </span>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
        <div className="px-4 py-3 border-t border-gray-100 bg-gray-50 text-xs text-gray-500">
          {t(`عرض ${filtered.length} من ${INSURANCE_CLAIMS.length} مطالبة`, `Showing ${filtered.length} of ${INSURANCE_CLAIMS.length} claims`)}
        </div>
      </div>
    </div>
  );
}
