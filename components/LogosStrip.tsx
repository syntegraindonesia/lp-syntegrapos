"use client";

import { useT } from "@/lib/i18n";

export default function LogosStrip() {
  const t = useT();
  const items = [
    "GoFood", "ShopeeFood", "GrabFood", "TikTok Shop", "Tokopedia", "Shopee",
  ];
  return (
    <section className="border-y border-slate-100 dark:border-white/10 bg-gradient-to-b from-white to-accent-50/40 dark:from-navy-950 dark:to-navy-900">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <p className="text-center text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-5">
          {t("logos_eyebrow")}
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center">
          {items.map((it) => (
            <div
              key={it}
              className="text-center text-slate-500 dark:text-slate-400 font-display font-semibold text-sm sm:text-base tracking-tight"
            >
              {it}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
