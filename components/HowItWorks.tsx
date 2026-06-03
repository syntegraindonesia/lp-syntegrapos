"use client";

import { useApp, useT } from "@/lib/i18n";

const stepsData = {
  id: [
    { n: "01", t: "Daftar & atur outlet", d: "Buat akun, tambahkan cabang dan gudang, undang staf dengan role masing-masing." },
    { n: "02", t: "Impor produk & stok", d: "Upload Excel atau input manual. Aktifkan tracking batch & expiry sesuai kebutuhan." },
    { n: "03", t: "Mulai jualan", d: "Kasir siap dipakai di browser atau install sebagai aplikasi. Offline tetap jalan." },
    { n: "04", t: "Pantau & otomasi", d: "Laporan real-time, journal otomatis ke akuntansi, order marketplace masuk ke satu antrian." },
  ],
  en: [
    { n: "01", t: "Sign up & set outlets", d: "Create an account, add branches and warehouses, invite staff with their roles." },
    { n: "02", t: "Import products & stock", d: "Upload from Excel or enter manually. Turn on batch & expiry tracking as needed." },
    { n: "03", t: "Start selling", d: "Cashier ready in the browser or installable as an app. Offline still works." },
    { n: "04", t: "Monitor & automate", d: "Real-time reports, auto journal to accounting, marketplace orders in one queue." },
  ],
};

export default function HowItWorks() {
  const t = useT();
  const { lang } = useApp();
  const steps = stepsData[lang];
  return (
    <section id="cara-kerja" className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink-900 dark:text-white">
          {t("how_h2")}
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">{t("how_sub")}</p>
      </div>
      <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((s) => (
          <li
            key={s.n}
            className="step-card rounded-xl border border-slate-200 dark:border-white/10 p-6 bg-white dark:bg-navy-900 relative overflow-hidden"
          >
            <div className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-gradient-to-br from-accent-100 to-brand-50 dark:from-accent-400/20 dark:to-brand-400/10 opacity-60 z-0" />
            <div className="relative z-10">
              <div className="font-mono text-xs text-accent-600 dark:text-accent-400">{s.n}</div>
              <h3 className="mt-2 font-display font-semibold text-lg text-ink-900 dark:text-white">{s.t}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{s.d}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
