import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/contexts/LangContext";
import AppShell from "@/components/AppShell";

export const metadata: Metadata = {
  title: "نظام حسابات مركز فاسكولار آرت | Vascular Art Finance",
  description: "Finance & IR Dashboard — Vascular Art Medical Center",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <LangProvider>
          <AppShell>{children}</AppShell>
        </LangProvider>
      </body>
    </html>
  );
}
