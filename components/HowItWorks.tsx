const steps = [
  {
    n: "01",
    title: "Daftar & atur outlet",
    desc: "Buat akun, tambahkan cabang dan gudang, undang staf dengan role masing-masing.",
  },
  {
    n: "02",
    title: "Impor produk & stok",
    desc: "Upload Excel atau input manual. Aktifkan tracking batch & expiry sesuai kebutuhan.",
  },
  {
    n: "03",
    title: "Mulai jualan",
    desc: "Kasir siap dipakai di browser atau install sebagai aplikasi. Offline tetap jalan.",
  },
  {
    n: "04",
    title: "Pantau & otomasi",
    desc: "Laporan real-time, journal otomatis ke akuntansi, order marketplace masuk ke satu antrian.",
  },
];

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
          Mulai dalam hitungan menit
        </h2>
        <p className="mt-4 text-slate-600">
          Tidak perlu install server, tidak perlu IT. Setup awal selesai dalam
          satu sore.
        </p>
      </div>
      <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((s) => (
          <li
            key={s.n}
            className="rounded-xl border border-slate-200 p-6 bg-white relative overflow-hidden"
          >
            <div className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-gradient-to-br from-accent-100 to-brand-50 opacity-60 z-0" />
            <div className="relative z-10">
              <div className="font-mono text-xs text-accent-600">{s.n}</div>
              <h3 className="mt-2 font-display font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
