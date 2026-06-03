"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase =
    "text-sm font-medium transition-colors hover:opacity-100 opacity-90";
  const textColor = scrolled ? "text-slate-700" : "text-white";
  const loginColor = scrolled ? "text-ink-900" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-[0_6px_24px_-12px_rgba(15,23,42,0.22)] border-b border-slate-200"
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
              scrolled ? "" : "brightness-0 invert"
            }`}
          />
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {[
            ["Fitur", "#fitur"],
            ["Cara Kerja", "#cara-kerja"],
            ["Harga", "#harga"],
            ["Testimoni", "#testimoni"],
            ["FAQ", "#faq"],
          ].map(([label, href]) => (
            <a key={label} href={href} className={`${linkBase} ${textColor}`}>
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href="https://pos.syntegra.co.id"
            className={`hidden sm:inline font-semibold text-sm ${loginColor}`}
          >
            Login
          </a>
          <a
            href="#harga"
            className={`inline-flex items-center rounded-xl text-sm font-semibold px-5 py-2.5 transition ${
              scrolled
                ? "bg-brand-grad text-white shadow-[0_8px_20px_-8px_rgba(37,99,235,0.5)]"
                : "bg-white text-brand-700 shadow-[0_10px_24px_-10px_rgba(0,0,0,0.35)] hover:-translate-y-0.5"
            }`}
          >
            Coba Gratis 30 Hari
          </a>
        </div>
      </div>
    </header>
  );
}
