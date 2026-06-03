"use client";

import { useApp, useT } from "@/lib/i18n";

const itemsData = {
  id: [
    { q: "Kasir tetap jalan walau internet di outlet kami sering putus. Saat online, semua transaksi langsung sinkron tanpa kehilangan data.", n: "Rani Pratiwi", r: "Owner, Kopi Senja (3 outlet)" },
    { q: "Laporan multi-cabang yang dulu butuh dikumpulkan manual sekarang langsung muncul real-time. Tutup buku jauh lebih cepat.", n: "Andre Wibowo", r: "Finance Manager, Mart 24" },
    { q: "Integrasi GoFood & ShopeeFood masuk ke satu antrian. Tidak ada lagi tablet menumpuk di kasir.", n: "Dewi Lestari", r: "Operations Head, Sambal Rumahan" },
  ],
  en: [
    { q: "The cashier keeps running even when the internet at our outlet drops. Once online, every transaction syncs instantly, no data loss.", n: "Rani Pratiwi", r: "Owner, Kopi Senja (3 outlets)" },
    { q: "Multi-branch reports that used to be collected manually now appear in real time. Closing the books is much faster.", n: "Andre Wibowo", r: "Finance Manager, Mart 24" },
    { q: "GoFood & ShopeeFood orders land in one queue. No more tablets stacking up at the counter.", n: "Dewi Lestari", r: "Operations Head, Sambal Rumahan" },
  ],
};

export default function Testimonials() {
  const t = useT();
  const { lang } = useApp();
  const items = itemsData[lang];
  return (
    <section id="testimoni" className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink-900 dark:text-white">
          {t("test_h2")}
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">{t("test_sub")}</p>
      </div>
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {items.map((it) => (
          <figure
            key={it.n}
            className="testimonial-card rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-navy-900 p-7"
          >
            <blockquote className="text-slate-700 dark:text-slate-200 leading-relaxed">
              “{it.q}”
            </blockquote>
            <figcaption className="mt-5 pt-5 border-t border-slate-100 dark:border-white/10">
              <div className="font-display font-semibold text-ink-900 dark:text-white">{it.n}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{it.r}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
