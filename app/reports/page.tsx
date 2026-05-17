"use client";
import { useState } from "react";
import { useLang } from "@/contexts/LangContext";
import { REPORTS, type Report } from "@/lib/data";

const TYPE_LABELS: Record<Report["type"], [string, string]> = {
  annual: ["تقرير سنوي", "Annual Report"],
  quarterly: ["تقرير ربعي", "Quarterly Report"],
  press: ["بيان صحفي", "Press Release"],
  filing: ["إفصاح", "Regulatory Filing"],
};

const TYPE_COLORS: Record<Report["type"], string> = {
  annual: "bg-teal-50 text-teal-700 border-teal-200",
  quarterly: "bg-blue-50 text-blue-700 border-blue-200",
  press: "bg-amber-50 text-amber-700 border-amber-200",
  filing: "bg-purple-50 text-purple-700 border-purple-200",
};

const TYPE_ICONS: Record<Report["type"], string> = {
  annual: "📊",
  quarterly: "📈",
  press: "📰",
  filing: "📋",
};

export default function ReportsPage() {
  const { t } = useLang();
  const [activeType, setActiveType] = useState<Report["type"] | "all">("all");

  const types: Array<{ value: Report["type"] | "all"; ar: string; en: string }> = [
    { value: "all", ar: "الكل", en: "All" },
    { value: "annual", ar: "تقارير سنوية", en: "Annual" },
    { value: "quarterly", ar: "تقارير ربعية", en: "Quarterly" },
    { value: "press", ar: "بيانات صحفية", en: "Press" },
    { value: "filing", ar: "إفصاحات", en: "Filings" },
  ];

  const filtered = activeType === "all" ? REPORTS : REPORTS.filter((r) => r.type === activeType);

  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {(["annual", "quarterly", "press", "filing"] as Report["type"][]).map((type) => {
          const count = REPORTS.filter((r) => r.type === type).length;
          return (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`bg-white rounded-2xl p-4 shadow-sm text-start hover:shadow-md transition-all border-2 ${
                activeType === type ? "border-primary" : "border-transparent"
              }`}
            >
              <div className="text-2xl mb-1">{TYPE_ICONS[type]}</div>
              <div className="text-xl font-extrabold text-slate-800">{count}</div>
              <div className="text-xs text-slate-500 mt-0.5">
                {t(TYPE_LABELS[type][0], TYPE_LABELS[type][1])}
              </div>
            </button>
          );
        })}
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 flex-wrap">
        {types.map((tp) => (
          <button
            key={tp.value}
            onClick={() => setActiveType(tp.value)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeType === tp.value
                ? "bg-primary text-white shadow"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {t(tp.ar, tp.en)}
          </button>
        ))}
      </div>

      {/* Document list */}
      <div className="grid gap-3">
        {filtered.map((doc) => (
          <div
            key={doc.id}
            className="bg-white rounded-2xl shadow-sm p-5 flex items-center gap-4 hover:shadow-md transition-shadow"
          >
            <div className="text-3xl flex-shrink-0">{TYPE_ICONS[doc.type]}</div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-slate-800 truncate">
                {t(doc.titleAr, doc.titleEn)}
              </h4>
              <div className="flex items-center gap-3 mt-1.5">
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-lg border ${TYPE_COLORS[doc.type]}`}
                >
                  {t(TYPE_LABELS[doc.type][0], TYPE_LABELS[doc.type][1])}
                </span>
                <span className="text-xs text-slate-400">{doc.date}</span>
                <span className="text-xs text-slate-400">{doc.size}</span>
              </div>
            </div>
            <a
              href={doc.url}
              className="flex-shrink-0 flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-primary-dark transition-colors"
            >
              <span>⬇</span>
              <span>{t("تحميل", "Download")}</span>
            </a>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-slate-400">
          {t("لا توجد وثائق في هذا القسم", "No documents in this section")}
        </div>
      )}
    </div>
  );
}
