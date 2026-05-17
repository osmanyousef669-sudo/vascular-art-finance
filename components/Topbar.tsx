"use client";
import { usePathname } from "next/navigation";
import { useLang } from "@/contexts/LangContext";

const PAGE_TITLES: Record<string, [string, string]> = {
  "/": ["لوحة التحكم الرئيسية", "Main Dashboard"],
  "/transactions": ["الحركات المالية", "Transactions"],
  "/reports": ["التقارير والوثائق", "Reports & Documents"],
  "/contact": ["فريق علاقات المستثمرين", "IR Team & Contact"],
};

export default function Topbar() {
  const pathname = usePathname();
  const { t, lang, toggle } = useLang();
  const [ar, en] = PAGE_TITLES[pathname] ?? ["", ""];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between gap-4">
      <div>
        <h2 className="text-xl font-extrabold text-slate-800">{t(ar, en)}</h2>
        <p className="text-xs text-slate-500 mt-0.5">
          {t("مركز فاسكولار آرت للرعاية الصحية", "Vascular Art Healthcare Center")}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <span className="hidden md:block text-sm text-slate-500">
          {new Date().toLocaleDateString(lang === "ar" ? "ar-AE" : "en-AE", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>

        <div className="flex bg-slate-100 rounded-xl p-1 gap-1">
          <button
            onClick={() => lang !== "ar" && toggle()}
            className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${
              lang === "ar" ? "bg-primary text-white shadow" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            AR
          </button>
          <button
            onClick={() => lang !== "en" && toggle()}
            className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${
              lang === "en" ? "bg-primary text-white shadow" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
