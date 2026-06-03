"use client";

import { useEffect, useState } from "react";
import { AppContext, Lang } from "@/lib/i18n";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id");
  const [theme, setThemeState] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    const storedLang = (localStorage.getItem("lang") as Lang) || "id";
    const storedTheme =
      (localStorage.getItem("theme") as "light" | "dark") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setLangState(storedLang);
    setThemeState(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
    document.documentElement.lang = storedLang;
    setMounted(true);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
  };
  const setTheme = (t: "light" | "dark") => {
    setThemeState(t);
    localStorage.setItem("theme", t);
    document.documentElement.classList.toggle("dark", t === "dark");
  };

  return (
    <AppContext.Provider value={{ lang, setLang, theme, setTheme }}>
      <div style={{ visibility: mounted ? "visible" : "hidden" }}>
        {children}
      </div>
    </AppContext.Provider>
  );
}
