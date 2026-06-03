"use client";

import { useApp } from "@/lib/i18n";

export function LangToggle({ light = false }: { light?: boolean }) {
  const { lang, setLang } = useApp();
  const next = lang === "id" ? "en" : "id";
  return (
    <button
      onClick={() => setLang(next)}
      className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition ${
        light
          ? "border-white/30 text-white hover:bg-white/10"
          : "border-slate-200 text-slate-700 hover:border-brand-300 hover:text-brand-700 dark:border-white/15 dark:text-slate-200 dark:hover:border-accent-400/60"
      }`}
      aria-label="Switch language"
    >
      <span className={lang === "id" ? "opacity-100" : "opacity-50"}>ID</span>
      <span className="opacity-30">/</span>
      <span className={lang === "en" ? "opacity-100" : "opacity-50"}>EN</span>
    </button>
  );
}

export function ThemeToggle({ light = false }: { light?: boolean }) {
  const { theme, setTheme } = useApp();
  const next = theme === "light" ? "dark" : "light";
  return (
    <button
      onClick={() => setTheme(next)}
      className={`inline-grid place-items-center h-8 w-8 rounded-lg border transition ${
        light
          ? "border-white/30 text-white hover:bg-white/10"
          : "border-slate-200 text-slate-700 hover:border-brand-300 hover:text-brand-700 dark:border-white/15 dark:text-slate-200 dark:hover:border-accent-400/60"
      }`}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
          <circle cx="12" cy="12" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      )}
    </button>
  );
}
