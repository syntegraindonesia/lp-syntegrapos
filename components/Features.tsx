const features = [
  {
    title: "Kasir Cepat (PWA)",
    desc: "Antarmuka kasir ringan berjalan di browser, install ke home screen, dukung barcode scanner, thermal printer & cash drawer.",
    icon: "🧾",
  },
  {
    title: "Offline-Ready",
    desc: "Tetap jualan tanpa internet. Transaksi tersimpan ter-enkripsi di perangkat dan auto-sync saat online.",
    icon: "📶",
  },
  {
    title: "Multi-Cabang & Multi-Gudang",
    desc: "Kelola banyak outlet dan gudang dalam satu dashboard, transfer stok, audit trail per pergerakan.",
    icon: "🏬",
  },
  {
    title: "Inventori Akurat",
    desc: "Tracking batch & expiry, opname stok, average cost, peringatan stok minimum, dan backorder opsional.",
    icon: "📦",
  },
  {
    title: "Laporan Real-time",
    desc: "Analisis penjualan, pembelian, dan inventori per cabang, per shift, per kasir — langsung di dashboard.",
    icon: "📊",
  },
  {
    title: "Integrasi Marketplace",
    desc: "Terima order otomatis dari GoFood, ShopeeFood, GrabFood, TikTok, Tokopedia — semuanya jadi satu antrian.",
    icon: "🔌",
  },
  {
    title: "Akuntansi Otomatis",
    desc: "Dynamic account lookup & auto-journal posting ke ERP Syntegra via message queue.",
    icon: "📚",
  },
  {
    title: "Hak Akses Granular",
    desc: "Role-based access, approval workflow untuk transaksi bernilai besar, audit log lengkap.",
    icon: "🔐",
  },
  {
    title: "Loyalitas & Voucher",
    desc: "Program poin, kupon, dan voucher dengan periode berlaku & batas penukaran.",
    icon: "🎁",
  },
];

export default function Features() {
  return (
    <section
      id="fitur"
      className="relative mx-auto max-w-7xl px-6 py-24"
    >
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
          Semua yang dibutuhkan untuk menjalankan bisnis Anda
        </h2>
        <p className="mt-4 text-slate-600">
          Dari kasir di outlet sampai pembukuan di kantor pusat — satu sistem,
          satu sumber data.
        </p>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-xl border border-slate-200 hover:border-accent-400 bg-white p-6 transition shadow-sm hover:shadow-[0_12px_40px_-12px_rgba(34,211,238,0.35)]"
          >
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-accent-100 to-brand-100 text-brand-700 grid place-items-center text-xl">
              {f.icon}
            </div>
            <h3 className="mt-4 font-display font-semibold text-lg">{f.title}</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
