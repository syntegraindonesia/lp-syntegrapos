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
            <span className="bg-brand-grad bg-clip-text text-transparent">
              Retail, F&amp;B &amp; Hiburan
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            SYNTEGRA POS membantu Anda mengelola transaksi, stok multi-gudang,
            membership, hingga integrasi marketplace &amp; akuntansi —
            satu aplikasi ringan yang tetap jalan walau internet putus.
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
    <div className="relative">
      <div className="absolute -inset-10 bg-gradient-to-br from-brand-500/20 via-accent-400/10 to-transparent blur-3xl rounded-full pointer-events-none" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/pos-showcase.png"
        alt="Tampilan SYNTEGRA POS pada layar kasir"
        className="relative w-full h-auto drop-shadow-2xl"
      />
    </div>
  );
}
