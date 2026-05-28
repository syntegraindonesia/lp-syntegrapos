export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-[520px] bg-dots opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 border border-brand-100 px-3 py-1 text-xs font-medium text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />
            PWA · Offline-ready · Multi-cabang
          </span>
          <h1 className="mt-5 font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Sistem Kasir Modern untuk{" "}
            <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              Retail &amp; F&amp;B
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            SYNTEGRA POS membantu Anda mengelola transaksi, stok multi-gudang,
            laporan real-time, hingga integrasi marketplace &amp; akuntansi —
            semua dalam satu aplikasi yang ringan dan bisa dipakai offline.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#cta"
              className="inline-flex items-center rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-medium px-5 py-3 shadow-glow"
            >
              Coba Gratis 30 Hari
            </a>
            <a
              href="#cara-kerja"
              className="inline-flex items-center rounded-lg border border-slate-200 hover:border-brand-300 text-slate-700 hover:text-brand-700 font-medium px-5 py-3"
            >
              Lihat Cara Kerja →
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              ["30 hari", "Trial gratis"],
              ["99.9%", "Uptime"],
              ["24/7", "Sync offline"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-2xl font-bold text-brand-700">{k}</dt>
                <dd className="text-xs text-slate-500 mt-1">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5">
          <HeroPreview />
        </div>
      </div>
    </section>
  );
}

function HeroPreview() {
  return (
    <div className="relative shine-border rounded-2xl bg-white border border-slate-200 shadow-2xl shadow-brand-900/10 overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 h-9 border-b border-slate-100 bg-slate-50/60">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        <span className="ml-3 text-[11px] font-mono text-slate-400">
          pos.syntegra.co.id
        </span>
      </div>
      <div className="p-5 grid grid-cols-5 gap-4">
        <aside className="col-span-2 space-y-2">
          {["Kasir", "Produk", "Stok", "Laporan", "Pelanggan", "Pengaturan"].map(
            (m, i) => (
              <div
                key={m}
                className={`text-xs rounded-md px-3 py-2 ${
                  i === 0
                    ? "bg-brand-600 text-white font-medium"
                    : "bg-slate-50 text-slate-600"
                }`}
              >
                {m}
              </div>
            )
          )}
        </aside>
        <div className="col-span-3 space-y-3">
          <div className="rounded-lg border border-slate-200 p-3">
            <div className="text-[10px] uppercase tracking-wider text-slate-400">
              Penjualan hari ini
            </div>
            <div className="font-display text-2xl font-bold text-ink-900 mt-1">
              Rp 4.812.500
            </div>
            <div className="text-[11px] text-emerald-600 mt-0.5">
              ▲ 12,4% vs kemarin
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              ["Order", "37"],
              ["Item", "112"],
              ["Avg", "Rp 130k"],
              ["Refund", "0"],
            ].map(([l, v]) => (
              <div
                key={l}
                className="rounded-md border border-slate-200 px-3 py-2"
              >
                <div className="text-[10px] text-slate-400">{l}</div>
                <div className="font-mono text-sm font-semibold">{v}</div>
              </div>
            ))}
          </div>
          <div className="rounded-lg bg-brand-50 border border-brand-100 px-3 py-2 text-[11px] text-brand-700 flex items-center justify-between">
            <span>● Mode Offline aktif — 3 transaksi pending</span>
            <span className="font-mono">sync</span>
          </div>
        </div>
      </div>
    </div>
  );
}
