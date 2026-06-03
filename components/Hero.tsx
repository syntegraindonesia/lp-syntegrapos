"use client";

import { useT } from "@/lib/i18n";

export default function Hero() {
  const t = useT();
  return (
    <section
      id="beranda"
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(135deg,#1e3a8a 0%,#1d4ed8 50%,#2563eb 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Background image (kasir scene) — only on >= md (desktop/tablet) */}
      <div className="absolute inset-0 z-0 hidden md:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-kasir.png"
          alt="Kasir menggunakan Syntegra POS"
          className="w-full h-full object-cover object-right"
        />
        {/* Light left-side gradient (image already has its own blue gradient) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right,rgba(15,54,143,0.55) 0%,rgba(27,70,199,0.25) 35%,rgba(27,70,199,0) 60%)",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl px-5 sm:px-6 pt-28 md:pt-32 pb-16 md:pb-20 flex items-center min-h-screen">
        <div className="max-w-xl">
          <span className="inline-flex whitespace-nowrap items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] sm:text-sm font-semibold backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            {t("hero_badge")}
          </span>

          <h1 className="mt-6 md:mt-7 font-display font-extrabold tracking-tight text-white leading-[1.08] text-[2rem] sm:text-5xl lg:text-[3.4rem]">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(110deg,#5eead4 0%,#67e8f9 35%,#38bdf8 70%,#7dd3fc 100%)",
              }}
            >
              {t("hero_h1_brand")}
            </span>
            <br />
            {t("hero_h1_rest")}
          </h1>

          <p className="mt-5 md:mt-6 text-base sm:text-lg text-white/85 max-w-lg leading-relaxed">
            {t("hero_sub")}
          </p>

          {/* Mobile-only photo: 3:4 portrait, centered on the people */}
          <div className="md:hidden mt-7 rounded-2xl overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.55)] ring-1 ring-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-kasir.png"
              alt="Kasir menggunakan Syntegra POS"
              className="w-full aspect-[3/4] object-cover"
              style={{ objectPosition: "88% 50%" }}
            />
          </div>

          <div className="mt-7 md:mt-9 flex flex-col sm:flex-row sm:flex-wrap gap-3 md:gap-4">
            <a
              href="#harga"
              className="hero-cta-white inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-xl bg-white text-brand-700 font-semibold px-5 md:px-6 py-3 text-sm md:text-base shadow-[0_10px_24px_-10px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 transition"
            >
              {t("hero_cta_primary")}
            </a>
            <a
              href="#cara-kerja"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-xl border border-white/55 bg-transparent text-white font-semibold px-5 md:px-6 py-3 text-sm md:text-base hover:bg-white/10 transition"
            >
              <span className="grid place-items-center w-5 h-5 md:w-6 md:h-6 rounded-full border border-current text-[9px] md:text-[10px]">
                ▶
              </span>
              {t("hero_cta_secondary")}
            </a>
          </div>

          <div className="mt-10 md:mt-12 grid grid-cols-4 sm:flex sm:flex-wrap gap-x-4 gap-y-5 sm:gap-x-9 sm:gap-y-6">
            {[
              ["🏬", t("hero_f1")],
              ["📶", t("hero_f2")],
              ["🛍️", t("hero_f3")],
              ["📊", t("hero_f4")],
            ].map(([ic, label]) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-medium text-white/90 text-center"
              >
                <span className="grid place-items-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/30 bg-white/10 text-lg sm:text-xl">
                  {ic}
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

