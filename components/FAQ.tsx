"use client";

import { useApp, useT } from "@/lib/i18n";

const qaData = {
  id: [
    { q: "Apakah POS tetap bisa dipakai tanpa internet?", a: "Ya. Transaksi disimpan ter-enkripsi di perangkat dan otomatis dikirim ke server saat koneksi kembali, tanpa kehilangan data." },
    { q: "Apakah data aman saat offline?", a: "Aman. Data lokal di-enkripsi dan hanya bisa diakses oleh akun kasir yang login. Audit log mencatat setiap pergerakan." },
    { q: "Apakah saya perlu menginstal aplikasi?", a: "Tidak wajib. Syntegra POS adalah PWA — bisa langsung dipakai di browser, atau ditambahkan ke home screen agar berperilaku seperti aplikasi native." },
    { q: "Apakah bisa kelola stok multi-gudang?", a: "Bisa. Tiap cabang dan gudang punya saldo stok sendiri, dengan transfer stok dan audit trail antar lokasi." },
    { q: "Apakah ada masa percobaan gratis?", a: "Ya, 30 hari penuh fitur dengan kartu kredit. Anda bisa berhenti kapan saja sebelum trial berakhir tanpa dipotong biaya." },
    { q: "Bagaimana mengatur hak akses tiap staf?", a: "Lewat role-based access. Anda bisa membuat role custom, mengatur izin per modul, dan menyalakan approval workflow untuk transaksi bernilai besar." },
  ],
  en: [
    { q: "Does the POS work without internet?", a: "Yes. Transactions are stored encrypted on device and automatically sent to the server when the connection returns — no data loss." },
    { q: "Is the data safe when offline?", a: "Safe. Local data is encrypted and only accessible to the signed-in cashier. The audit log records every change." },
    { q: "Do I need to install an app?", a: "Not required. Syntegra POS is a PWA — usable directly in the browser, or installable to the home screen to behave like a native app." },
    { q: "Can I manage multi-warehouse stock?", a: "Yes. Each branch and warehouse has its own stock balance, with transfers and audit trails between locations." },
    { q: "Is there a free trial?", a: "Yes, 30 full-feature days with a credit card. Cancel anytime before the trial ends and you won't be charged." },
    { q: "How do I configure staff permissions?", a: "Via role-based access. Create custom roles, set per-module permissions, and enable approval workflows for high-value transactions." },
  ],
};

export default function FAQ() {
  const t = useT();
  const { lang } = useApp();
  const qa = qaData[lang];
  return (
    <section
      id="faq"
      className="relative border-y border-slate-100 dark:border-white/10"
      style={{
        background:
          "radial-gradient(ellipse at 100% 50%, rgba(103,232,249,0.08), transparent 55%), linear-gradient(180deg,var(--faq-top,#ffffff) 0%,var(--faq-bot,#f0f9ff) 100%)",
      }}
    >
      <style>{`html.dark #faq{--faq-top:#050d24;--faq-bot:#091538;}`}</style>
      <div className="mx-auto max-w-4xl px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink-900 dark:text-white">
            {t("faq_h2")}
          </h2>
        </div>
        <div className="faq-container mt-10 divide-y divide-slate-200 dark:divide-white/10 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-navy-900">
          {qa.map((item, i) => (
            <details key={i} className="group p-6 open:bg-white dark:open:bg-navy-900">
              <summary className="flex cursor-pointer items-center justify-between gap-6 list-none">
                <span className="font-display font-medium text-ink-900 dark:text-white">
                  {item.q}
                </span>
                <span className="text-accent-500 dark:text-accent-400 group-open:rotate-45 transition">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
