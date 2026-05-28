export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/75 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-syntegra-pos.png"
            alt="Syntegra POS"
            className="h-8 w-auto"
          />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#fitur" className="hover:text-brand-700">Fitur</a>
          <a href="#cara-kerja" className="hover:text-brand-700">Cara Kerja</a>
          <a href="#harga" className="hover:text-brand-700">Harga</a>
          <a href="#testimoni" className="hover:text-brand-700">Testimoni</a>
          <a href="#faq" className="hover:text-brand-700">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://pos.syntegra.co.id"
            className="hidden sm:inline text-sm text-slate-700 hover:text-brand-700"
          >
            Login
          </a>
          <a
            href="#cta"
            className="inline-flex items-center rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium px-4 py-2 shadow-sm"
          >
            Coba Gratis 30 Hari
          </a>
        </div>
      </div>
    </header>
  );
}
