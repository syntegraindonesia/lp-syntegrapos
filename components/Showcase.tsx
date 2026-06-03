export default function Showcase() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background:
          "radial-gradient(ellipse at 90% 10%, rgba(34,211,238,0.22), transparent 55%), linear-gradient(135deg,#050d24 0%,#091538 45%,#0c1b4d 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs uppercase tracking-widest text-accent-300">
            Arsitektur Sistem
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Dirancang untuk skala &amp; keandalan
          </h2>
          <p className="mt-5 text-slate-300 leading-relaxed">
            PWA modern + aplikasi jembatan lokal untuk hardware kasir. Sinkronisasi
            asinkron via message queue, posting jurnal otomatis ke ERP, dan
            isolasi data per tenant.
          </p>
          <ul className="mt-6 space-y-3 text-slate-300 text-sm">
            {[
              "Application Layer — API Server multi-tenant",
              "Async sync via Message Queue",
              "Dynamic account lookup ke modul akuntansi",
              "Local bridge: thermal printer, barcode, cash drawer",
              "Audit Trail & Fraud Detection",
            ].map((x) => (
              <li key={x} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-400" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-accent-400/25 via-brand-500/15 to-transparent blur-2xl rounded-3xl" />
          <pre className="relative font-mono text-[12px] leading-relaxed text-slate-200 bg-navy-950/70 border border-accent-400/20 rounded-2xl p-6 overflow-x-auto backdrop-blur">
{`┌─────────────────────────────────────────────┐
│  PWA Kasir (Browser / Home Screen)          │
│  ├─ Local Bridge (printer, scanner, drawer) │
│  └─ IndexedDB (offline-encrypted queue)     │
└──────────────┬──────────────────────────────┘
               │  HTTPS · WebSocket
┌──────────────▼──────────────────────────────┐
│  API Server (multi-tenant, RBAC)            │
│  ├─ Inventory · Sales · Loyalty             │
│  └─ Marketplace adapter (Go/Shopee/Grab)    │
└──────────────┬──────────────────────────────┘
               │  Message Queue
┌──────────────▼──────────────────────────────┐
│  ERP Syntegra · Accounting (auto-journal)   │
└─────────────────────────────────────────────┘`}
          </pre>
        </div>
      </div>
    </section>
  );
}
