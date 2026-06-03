const included = [
  "Kasir & transaksi tanpa batas",
  "Manajemen produk + varian + multi-satuan",
  "Stok multi-gudang & alert stok",
  "Laporan penjualan real-time",
  "Mode offline — tetap jalan tanpa internet",
  "Sudah termasuk 1 cabang & 1 user",
];

const addons = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm14 10v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    label: "Tambah User",
    price: "Rp 25.000",
    unit: "/user",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21V8l9-5 9 5v13M3 21h18M9 21v-6h6v6M9 11h.01M15 11h.01" />
      </svg>
    ),
    label: "Tambah Cabang",
    price: "Rp 99.000",
    unit: "/cabang",
  },
];

export default function Pricing() {
  return (
    <section
      id="harga"
      className="relative border-y border-slate-100 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(34,211,238,0.12), transparent 60%), linear-gradient(180deg,#f8fafc 0%,#eff6ff 100%)",
      }}
    >
      {/* decorative blurred orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-accent-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-brand-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 backdrop-blur px-4 py-1.5 text-xs font-semibold text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
            Harga jujur · tanpa biaya tersembunyi
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-ink-900 leading-[1.05]">
            Satu paket. <br className="sm:hidden" />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(110deg,#1e40af 0%,#2563eb 35%,#22d3ee 100%)",
              }}
            >
              Semua yang Anda butuhkan.
            </span>
          </h2>
          <p className="mt-5 text-slate-600 text-lg">
            Trial 14 hari dengan kartu kredit. Batalkan kapan saja sebelum trial
            berakhir, tanpa dipotong biaya.
          </p>
        </div>

        {/* Pricing card */}
        <div className="mt-14 relative">
          {/* Glow behind card */}
          <div
            className="absolute -inset-3 rounded-[2rem] blur-2xl opacity-70 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg,#22d3ee 0%,#2563eb 50%,#1e40af 100%)",
            }}
          />

          <div className="relative rounded-3xl bg-white border border-white/60 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.25)] overflow-hidden">
            {/* Top ribbon */}
            <div
              className="relative px-6 py-3 text-center text-white text-sm font-bold tracking-wide"
              style={{
                background:
                  "linear-gradient(90deg,#1e40af 0%,#2563eb 50%,#22d3ee 100%)",
              }}
            >
              <span className="mr-2">🎉</span>
              PROMO HEMAT HAMPIR 50% · BERLAKU TERBATAS
            </div>

            <div className="grid lg:grid-cols-5">
              {/* LEFT — pricing */}
              <div className="lg:col-span-3 p-8 lg:p-12">
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo-syntegra-pos.png"
                    alt="Syntegra POS"
                    className="h-9 w-auto"
                  />
                </div>

                <div className="mt-8 flex items-end gap-4 flex-wrap">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-display text-2xl text-slate-400 line-through font-bold">
                        Rp 288.000
                      </span>
                      <span className="rounded-md bg-rose-50 border border-rose-100 text-rose-600 text-[11px] font-bold px-2 py-0.5 tracking-wider">
                        -48%
                      </span>
                    </div>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span
                        className="font-display font-extrabold tracking-tighter text-6xl lg:text-7xl bg-clip-text text-transparent"
                        style={{
                          backgroundImage:
                            "linear-gradient(110deg,#0c1b4d 0%,#1e40af 40%,#2563eb 100%)",
                        }}
                      >
                        Rp149.000
                      </span>
                    </div>
                    <div className="mt-1 text-slate-500 text-sm">
                      <span className="font-semibold text-ink-900">/bulan</span>
                      {" · "}
                      <span>harga promo periode terbatas</span>
                    </div>
                  </div>
                </div>

                {/* Add-ons */}
                <div className="mt-10">
                  <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-slate-400">
                    Tambahan opsional
                  </div>
                  <div className="mt-3 grid sm:grid-cols-2 gap-3">
                    {addons.map((a) => (
                      <div
                        key={a.label}
                        className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 hover:border-accent-400 hover:bg-accent-50/40 transition"
                      >
                        <span className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-accent-100 to-brand-100 text-brand-700">
                          {a.icon}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-ink-900">
                            {a.label}
                          </div>
                          <div className="text-[13px] text-slate-500">
                            <span className="font-semibold text-ink-900">
                              {a.price}
                            </span>{" "}
                            <span className="text-slate-400">{a.unit}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="#cta"
                  className="group mt-8 relative inline-flex w-full items-center justify-center gap-2 rounded-2xl text-white font-bold text-lg px-6 py-4 shadow-[0_18px_40px_-14px_rgba(37,99,235,0.65)] hover:-translate-y-0.5 transition overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(110deg,#1e40af 0%,#2563eb 50%,#22d3ee 100%)",
                  }}
                >
                  <span>Mulai Sekarang</span>
                  <svg className="h-5 w-5 group-hover:translate-x-1 transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>

                {/* Trust row */}
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-slate-500">
                  {["Trial 14 hari", "Tanpa setup fee", "Batal kapan saja"].map(
                    (t) => (
                      <span key={t} className="flex items-center gap-1.5">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3.5 w-3.5 text-accent-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {t}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* RIGHT — included features */}
              <div
                className="lg:col-span-2 p-8 lg:p-10 relative"
                style={{
                  background:
                    "radial-gradient(ellipse at 90% 10%, rgba(34,211,238,0.18), transparent 60%), linear-gradient(180deg,#f8fbff 0%,#eff6ff 100%)",
                }}
              >
                <h3 className="font-display text-xl font-bold text-ink-900">
                  Yang Anda dapatkan
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Semua fitur tanpa batas, dari hari pertama.
                </p>
                <ul className="mt-6 space-y-3.5">
                  {included.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-[15px] text-ink-900"
                    >
                      <span
                        className="mt-0.5 grid place-items-center h-6 w-6 rounded-full text-white flex-shrink-0 shadow-[0_4px_10px_-2px_rgba(37,99,235,0.45)]"
                        style={{
                          background:
                            "linear-gradient(135deg,#2563eb 0%,#22d3ee 100%)",
                        }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="h-3.5 w-3.5"
                        >
                          <path
                            d="M5 13l4 4L19 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
