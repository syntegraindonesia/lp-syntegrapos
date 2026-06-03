const qa = [
  {
    q: "Apakah POS tetap bisa dipakai tanpa internet?",
    a: "Ya. Transaksi disimpan ter-enkripsi di perangkat dan otomatis dikirim ke server saat koneksi kembali, tanpa kehilangan data.",
  },
  {
    q: "Apakah data aman saat offline?",
    a: "Aman. Data lokal di-enkripsi dan hanya bisa diakses oleh akun kasir yang login. Audit log mencatat setiap pergerakan.",
  },
  {
    q: "Apakah saya perlu menginstal aplikasi?",
    a: "Tidak wajib. Syntegra POS adalah PWA — bisa langsung dipakai di browser, atau ditambahkan ke home screen agar berperilaku seperti aplikasi native.",
  },
  {
    q: "Apakah bisa kelola stok multi-gudang?",
    a: "Bisa. Tiap cabang dan gudang punya saldo stok sendiri, dengan transfer stok dan audit trail antar lokasi.",
  },
  {
    q: "Apakah ada masa percobaan gratis?",
    a: "Ya, 14 hari penuh fitur dengan kartu kredit. Anda bisa berhenti kapan saja sebelum trial berakhir tanpa dipotong biaya.",
  },
  {
    q: "Bagaimana mengatur hak akses tiap staf?",
    a: "Lewat role-based access. Anda bisa membuat role custom, mengatur izin per modul, dan menyalakan approval workflow untuk transaksi bernilai besar.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative border-y border-slate-100"
      style={{
        background:
          "radial-gradient(ellipse at 100% 50%, rgba(103,232,249,0.08), transparent 55%), linear-gradient(180deg,#ffffff 0%,#f0f9ff 100%)",
      }}
    >
      <div className="mx-auto max-w-4xl px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Pertanyaan yang sering ditanyakan
          </h2>
        </div>
        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {qa.map((item, i) => (
            <details key={i} className="group p-6 open:bg-white">
              <summary className="flex cursor-pointer items-center justify-between gap-6 list-none">
                <span className="font-display font-medium text-ink-900">
                  {item.q}
                </span>
                <span className="text-accent-500 group-open:rotate-45 transition">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
