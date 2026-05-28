export default function CTASection() {
  return (
    <section id="cta" className="mx-auto max-w-7xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 text-white p-10 lg:p-14">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
        <div className="relative grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Siap mempercepat bisnis Anda?
            </h2>
            <p className="mt-3 text-white/85 max-w-lg">
              Coba SYNTEGRA POS gratis selama 30 hari. Tidak perlu kartu kredit,
              tidak perlu install server.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3 lg:justify-end">
            <input
              type="email"
              required
              placeholder="email@bisnis.com"
              className="rounded-lg px-4 py-3 text-ink-900 placeholder:text-slate-400 outline-none ring-2 ring-transparent focus:ring-white/60 min-w-0 flex-1"
            />
            <button
              type="submit"
              className="rounded-lg bg-ink-900 hover:bg-ink-800 px-5 py-3 font-medium"
            >
              Mulai Trial
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
