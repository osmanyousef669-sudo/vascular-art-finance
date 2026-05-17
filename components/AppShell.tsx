"use client";
import { useLang } from "@/contexts/LangContext";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const { dir } = useLang();
  return (
    <div dir={dir} className="min-h-screen flex bg-slate-50">
      <Sidebar />
      <div className="flex-1 flex flex-col" style={{ marginRight: dir === "rtl" ? 240 : 0, marginLeft: dir === "ltr" ? 240 : 0 }}>
        <Topbar />
        <main className="flex-1 p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
}
