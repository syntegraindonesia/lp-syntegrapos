export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-3 font-semibold">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-syntegra-pos.png"
            alt="Syntegra POS"
            className="h-[30px] w-auto block"
          />
          <span className="text-slate-400 font-normal">
            · Bagian dari ekosistem Syntegra.
          </span>
        </div>
        <p className="text-slate-500">
          © {new Date().getFullYear()} Syntegra. Semua hak dilindungi.
        </p>
      </div>
    </footer>
  );
}
