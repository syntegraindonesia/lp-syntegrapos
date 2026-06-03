"use client";

import { useApp, useT } from "@/lib/i18n";

const featuresData = {
  id: [
    { i: "🧾", t: "Kasir Cepat (PWA)", d: "Antarmuka kasir ringan berjalan di browser, install ke home screen, dukung barcode scanner, thermal printer & cash drawer." },
    { i: "📶", t: "Offline-Ready", d: "Tetap jualan tanpa internet. Transaksi tersimpan ter-enkripsi di perangkat dan auto-sync saat online." },
    { i: "🏬", t: "Multi-Cabang & Multi-Gudang", d: "Kelola banyak outlet dan gudang dalam satu dashboard, transfer stok, audit trail per pergerakan." },
    { i: "📦", t: "Inventori Akurat", d: "Tracking batch & expiry, opname stok, average cost, peringatan stok minimum, dan backorder opsional." },
    { i: "📊", t: "Laporan Real-time", d: "Analisis penjualan, pembelian, dan inventori per cabang, per shift, per kasir — langsung di dashboard." },
    { i: "🔌", t: "Integrasi Marketplace", d: "Terima order otomatis dari GoFood, ShopeeFood, GrabFood, TikTok, Tokopedia — semuanya jadi satu antrian." },
    { i: "📚", t: "Akuntansi Otomatis", d: "Dynamic account lookup & auto-journal posting ke ERP Syntegra via message queue." },
    { i: "🔐", t: "Hak Akses Granular", d: "Role-based access, approval workflow untuk transaksi bernilai besar, audit log lengkap." },
    { i: "🎁", t: "Loyalitas & Voucher", d: "Program poin, kupon, dan voucher dengan periode berlaku & batas penukaran." },
  ],
  en: [
    { i: "🧾", t: "Fast Cashier (PWA)", d: "Lightweight cashier UI in the browser, installable to home screen, supports barcode scanner, thermal printer & cash drawer." },
    { i: "📶", t: "Offline-Ready", d: "Keep selling without internet. Transactions are stored encrypted on device and auto-sync when back online." },
    { i: "🏬", t: "Multi-Branch & Multi-Warehouse", d: "Manage outlets and warehouses in one dashboard, transfer stock, audit trail for every movement." },
    { i: "📦", t: "Accurate Inventory", d: "Batch & expiry tracking, stock opname, weighted average cost, low-stock alerts, optional backorder." },
    { i: "📊", t: "Real-time Reports", d: "Sales, purchasing and inventory analytics by branch, shift, cashier — straight on the dashboard." },
    { i: "🔌", t: "Marketplace Integration", d: "Accept orders automatically from GoFood, ShopeeFood, GrabFood, TikTok, Tokopedia — all in one queue." },
    { i: "📚", t: "Automatic Accounting", d: "Dynamic account lookup & auto journal posting to Syntegra ERP via message queue." },
    { i: "🔐", t: "Granular Permissions", d: "Role-based access, approval workflow for high-value transactions, full audit log." },
    { i: "🎁", t: "Loyalty & Vouchers", d: "Points programs, coupons and vouchers with validity period and redemption limits." },
  ],
};

export default function Features() {
  const t = useT();
  const { lang } = useApp();
  const features = featuresData[lang];
  return (
    <section id="fitur" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink-900 dark:text-white">
          {t("features_h2")}
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          {t("features_sub")}
        </p>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f) => (
          <div
            key={f.t}
            className="feature-card group rounded-xl border border-slate-200 dark:border-white/10 hover:border-accent-400 dark:hover:border-accent-400/60 bg-white dark:bg-navy-900 p-6 transition shadow-sm hover:shadow-[0_12px_40px_-12px_rgba(34,211,238,0.35)] dark:shadow-none"
          >
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-accent-100 to-brand-100 dark:from-accent-400/20 dark:to-brand-400/20 text-brand-700 dark:text-accent-200 grid place-items-center text-xl">
              {f.i}
            </div>
            <h3 className="mt-4 font-display font-semibold text-lg text-ink-900 dark:text-white">{f.t}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{f.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
