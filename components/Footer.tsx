export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 grid place-items-center text-white font-display font-bold">
              S
            </div>
            <span className="font-display font-bold tracking-tight">
              SYNTEGRA<span className="text-brand-600"> POS</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-slate-500 max-w-xs">
            Sistem kasir modern untuk retail &amp; F&amp;B. Bagian dari ekosistem
            Syntegra.
          </p>
        </div>
        <FooterCol
          title="Produk"
          links={[
            ["Fitur", "#fitur"],
            ["Harga", "#harga"],
            ["Cara Kerja", "#cara-kerja"],
            ["FAQ", "#faq"],
          ]}
        />
        <FooterCol
          title="Perusahaan"
          links={[
            ["Tentang Syntegra", "https://syntegra.co.id"],
            ["Blog", "#"],
            ["Karir", "#"],
            ["Kontak", "#"],
          ]}
        />
        <FooterCol
          title="Legal"
          links={[
            ["Kebijakan Privasi", "#"],
            ["Syarat & Ketentuan", "#"],
            ["SLA", "#"],
          ]}
        />
      </div>
      <div className="border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} PT Syntegra. All rights reserved.</span>
          <span className="font-mono">v1.0 · pos.syntegra.co.id</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <h4 className="font-display font-semibold text-sm">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {links.map(([label, href]) => (
          <li key={label}>
            <a className="hover:text-brand-700" href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
