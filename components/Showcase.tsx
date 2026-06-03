"use client";

import { useT } from "@/lib/i18n";

export default function Showcase() {
  const t = useT();
  const bullets = t("showcase_bullets") as readonly string[];
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
            {t("showcase_eye")}
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight">
            {t("showcase_h2")}
          </h2>
          <p className="mt-5 text-slate-300 leading-relaxed">
            {t("showcase_sub")}
          </p>
          <ul className="mt-6 space-y-3 text-slate-300 text-sm">
            {bullets.map((x) => (
              <li key={x} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-400" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-accent-400/15 via-brand-500/10 to-transparent blur-2xl rounded-3xl" />
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
