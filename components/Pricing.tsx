const tiers = [
  {
    name: "Starter",
    price: "Rp 149rb",
    period: "/bulan per outlet",
    desc: "Untuk UMKM, cafe kecil, toko tunggal.",
    features: [
      "1 cabang, 2 user",
      "Kasir PWA + offline",
      "Inventori dasar",
      "Laporan penjualan harian",
      "Support email",
    ],
    cta: "Mulai Starter",
    highlight: false,
  },
  {
    name: "Business",
    price: "Rp 349rb",
    period: "/bulan per outlet",
    desc: "Multi-cabang, kebutuhan retail & F&B menengah.",
    features: [
      "Multi-cabang & multi-gudang",
      "Batch & expiry tracking",
      "Integrasi marketplace",
      "Loyalti & voucher",
      "Approval workflow",
      "Support prioritas",
    ],
    cta: "Coba Business 30 Hari",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "kontak tim kami",
    desc: "Grup usaha, franchise, integrasi ERP penuh.",
    features: [
      "Semua fitur Business",
      "Akuntansi auto-journal ke ERP",
      "SLA & dedicated support",
      "Custom integration",
      "On-prem option",
    ],
    cta: "Hubungi Sales",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="harga" className="bg-slate-50/60 border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Harga sederhana, transparan
          </h2>
          <p className="mt-4 text-slate-600">
            Pilih sesuai skala. Semua paket termasuk update otomatis dan trial 30
            hari tanpa kartu kredit.
          </p>
        </div>
        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {tiers.map((t) => {
            const isHi = t.highlight;
            return (
              <div
                key={t.name}
                className={`relative rounded-2xl p-7 border transition ${
                  isHi
                    ? "bg-brand-grad text-white border-transparent shadow-glow"
                    : "bg-brand-50 text-ink-900 border-brand-100 hover:border-brand-300"
                }`}
              >
                {isHi && (
                  <span className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-white text-brand-700 text-[11px] font-semibold px-3 py-1 shadow">
                    Paling populer
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold">{t.name}</h3>
                <p
                  className={`mt-1 text-sm ${
                    isHi ? "text-white/80" : "text-slate-600"
                  }`}
                >
                  {t.desc}
                </p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-display text-3xl font-bold">{t.price}</span>
                  <span
                    className={`text-sm ${
                      isHi ? "text-white/80" : "text-slate-500"
                    }`}
                  >
                    {t.period}
                  </span>
                </div>
                <ul
                  className={`mt-6 space-y-2 text-sm ${
                    isHi ? "text-white/95" : "text-slate-700"
                  }`}
                >
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className={isHi ? "text-white" : "text-brand-600"}>✓</span>{" "}
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={`mt-7 inline-flex w-full justify-center rounded-lg px-4 py-2.5 text-sm font-semibold ${
                    isHi
                      ? "bg-white text-brand-700 hover:bg-brand-50"
                      : "bg-brand-600 hover:bg-brand-700 text-white"
                  }`}
                >
                  {t.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
