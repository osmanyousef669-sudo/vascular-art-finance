"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/contexts/LangContext";

const NAV = [
  { href: "/", iconAr: "📊", iconEn: "📊", labelAr: "لوحة التحكم", labelEn: "Dashboard" },
  { href: "/transactions", iconAr: "💳", iconEn: "💳", labelAr: "الحركات المالية", labelEn: "Transactions" },
  { href: "/reports", iconAr: "📄", iconEn: "📄", labelAr: "التقارير والوثائق", labelEn: "Reports & Docs" },
  { href: "/contact", iconAr: "👥", iconEn: "👥", labelAr: "فريق علاقات المستثمرين", labelEn: "IR Team & Contact" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { t, dir } = useLang();

  return (
    <aside
      className="fixed top-0 h-screen w-60 flex flex-col text-white overflow-y-auto z-50"
      style={{
        background: "linear-gradient(180deg, #0f766e 0%, #134e4a 100%)",
        right: dir === "rtl" ? 0 : "auto",
        left: dir === "ltr" ? 0 : "auto",
      }}
    >
      <div className="p-6 pb-4">
        <h1 className="text-lg font-extrabold leading-tight">
          {t("مركز فاسكولار آرت", "Vascular Art Center")}
        </h1>
        <p className="text-xs mt-1 opacity-70">
          {t("النظام المالي", "Finance & IR System")}
        </p>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {NAV.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                active
                  ? "bg-white/20 text-white shadow-sm"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="text-base">{item.iconAr}</span>
              <span>{t(item.labelAr, item.labelEn)}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 text-xs text-white/50 border-t border-white/10 mt-4">
        {t("© 2026 فاسكولار آرت", "© 2026 Vascular Art")}
      </div>
    </aside>
  );
}
