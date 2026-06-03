export default function LogosStrip() {
  const items = [
    "GoFood", "ShopeeFood", "GrabFood", "TikTok Shop", "Tokopedia", "Shopee",
  ];
  return (
    <section className="border-y border-slate-100 bg-gradient-to-b from-white to-accent-50/40">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <p className="text-center text-xs uppercase tracking-widest text-slate-400 mb-5">
          Terintegrasi dengan platform yang Anda pakai
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center">
          {items.map((it) => (
            <div
              key={it}
              className="text-center text-slate-500 font-display font-semibold text-sm sm:text-base tracking-tight"
            >
              {it}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
