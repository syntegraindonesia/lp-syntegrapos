"use client";

import { useT } from "@/lib/i18n";

const row1 = ["GitHub", "Xendit", "Claude", "NanoBanana", "DeepInfra"];
const row2 = ["ElevenLabs", "Flux", "DeepSeek", "ChatGPT", "OpenAI"];

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  // duplicate items so the loop is seamless (translateX -50% covers one copy)
  const list = [...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden">
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {list.map((it, i) => (
          <div
            key={`${it}-${i}`}
            className="shrink-0 text-slate-500 dark:text-slate-300 font-display font-semibold text-base sm:text-lg tracking-tight px-4"
          >
            {it}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LogosStrip() {
  const t = useT();
  return (
    <section className="border-y border-slate-100 dark:border-white/10 bg-gradient-to-b from-white to-accent-50/40 dark:from-transparent dark:to-transparent">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-center text-xs uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-6">
          {t("logos_eyebrow")}
        </p>
        <div className="space-y-4">
          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse />
        </div>
      </div>
    </section>
  );
}
