const items = [
  {
    quote:
      "Kasir tetap jalan walau internet di outlet kami sering putus. Saat online, semua transaksi langsung sinkron tanpa kehilangan data.",
    name: "Rani Pratiwi",
    role: "Owner, Kopi Senja (3 outlet)",
  },
  {
    quote:
      "Laporan multi-cabang yang dulu butuh dikumpulkan manual sekarang langsung muncul real-time. Tutup buku jauh lebih cepat.",
    name: "Andre Wibowo",
    role: "Finance Manager, Mart 24",
  },
  {
    quote:
      "Integrasi GoFood &amp; ShopeeFood masuk ke satu antrian. Tidak ada lagi tablet menumpuk di kasir.",
    name: "Dewi Lestari",
    role: "Operations Head, Sambal Rumahan",
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
          Apa Kata Pemilik Bisnis
        </h2>
        <p className="mt-4 text-slate-600">
          Cerita nyata dari pengguna SYNTEGRA POS di berbagai jenis usaha.
        </p>
      </div>
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {items.map((t) => (
          <figure
            key={t.name}
            className="rounded-2xl border border-slate-200 bg-white p-7"
          >
            <blockquote
              className="text-slate-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: `“${t.quote}”` }}
            />
            <figcaption className="mt-5 pt-5 border-t border-slate-100">
              <div className="font-display font-semibold">{t.name}</div>
              <div className="text-xs text-slate-500">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
