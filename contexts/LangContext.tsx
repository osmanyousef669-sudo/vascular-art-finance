"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "ar" | "en";

interface LangCtx {
  lang: Lang;
  toggle: () => void;
  t: (ar: string, en: string) => string;
  dir: "rtl" | "ltr";
}

const LangContext = createContext<LangCtx>({
  lang: "ar",
  toggle: () => {},
  t: (ar) => ar,
  dir: "rtl",
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar");
  const toggle = () => setLang((l) => (l === "ar" ? "en" : "ar"));
  const t = (ar: string, en: string) => (lang === "ar" ? ar : en);
  return (
    <LangContext.Provider value={{ lang, toggle, t, dir: lang === "ar" ? "rtl" : "ltr" }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
