"use client";

import { useT } from "@/lib/i18n";

export default function Footer() {
  const t = useT();
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 py-10 bg-white dark:bg-navy-950">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 text-sm">
        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-2 sm:gap-3 font-semibold">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-syntegra-pos.png"
            alt="Syntegra POS"
            width={4084}
            height={1215}
            className="h-5 md:h-[30px] w-auto max-w-none block dark:brightness-0 dark:invert"
            style={{ aspectRatio: "4084 / 1215" }}
          />
          <span className="text-slate-400 dark:text-slate-500 font-normal">
            {t("footer_tag")}
          </span>
        </div>
        <p className="text-slate-500 dark:text-slate-400">
          {t("footer_copy").replace("{year}", String(new Date().getFullYear()))}
        </p>
      </div>
    </footer>
  );
}
