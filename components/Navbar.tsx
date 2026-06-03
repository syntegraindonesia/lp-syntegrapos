"use client";

import { useEffect, useState } from "react";
import { useT } from "@/lib/i18n";
import { LangToggle, ThemeToggle } from "./Controls";

export default function Navbar() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: [string, string][] = [
    [t("nav_fitur"), "#fitur"],
    [t("nav_cara"), "#cara-kerja"],
    [t("nav_harga"), "#harga"],
    [t("nav_testimoni"), "#testimoni"],
    [t("nav_faq"), "#faq"],
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled
          ? "bg-white/95 dark:bg-navy-900/85 backdrop-blur shadow-[0_6px_24px_-12px_rgba(15,23,42,0.22)] border-b border-slate-200 dark:border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 h-[74px] flex items-center justify-between">
        <a href="#" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-syntegra-pos.png"
            alt="Syntegra POS"
            className={`h-9 w-auto transition ${
              scrolled ? "dark:brightness-0 dark:invert" : "brightness-0 invert"
            }`}
          />
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className={`text-sm font-medium transition-colors hover:opacity-100 opacity-90 ${
                scrolled
                  ? "text-slate-700 dark:text-slate-200 hover:text-brand-700 dark:hover:text-accent-300"
                  : "text-white hover:text-accent-200"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangToggle light={!scrolled} />
          <ThemeToggle light={!scrolled} />
          <a
            href="https://pos.syntegra.co.id"
            className={`hidden sm:inline font-semibold text-sm ${
              scrolled ? "text-ink-900 dark:text-slate-100" : "text-white"
            }`}
          >
            {t("nav_login")}
          </a>
          <a
            href="#harga"
            className={`inline-flex items-center rounded-xl text-sm font-semibold px-5 py-2.5 transition ${
              scrolled
                ? "bg-brand-grad text-white shadow-[0_8px_20px_-8px_rgba(37,99,235,0.5)]"
                : "hero-cta-white bg-white text-brand-700 shadow-[0_10px_24px_-10px_rgba(0,0,0,0.35)] hover:-translate-y-0.5"
            }`}
          >
            {t("nav_cta")}
          </a>
        </div>
      </div>
    </header>
  );
}
