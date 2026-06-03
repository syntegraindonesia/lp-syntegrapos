"use client";

import { createContext, useContext } from "react";

export type Lang = "id" | "en";

export const messages = {
  id: {
    // Navbar
    nav_fitur: "Fitur",
    nav_cara: "Cara Kerja",
    nav_harga: "Harga",
    nav_testimoni: "Testimoni",
    nav_faq: "FAQ",
    nav_login: "Login",
    nav_cta: "Coba Gratis 30 Hari",

    // Hero
    hero_badge: "Sistem Kasir Modern untuk Bisnis Modern",
    hero_h1_brand: "Syntegra POS",
    hero_h1_rest: "Kasir Pintar yang Urus Semuanya untuk Anda",
    hero_sub:
      "Operasional lancar 24/7, tanpa drama, tanpa downtime. Fokus pada pelanggan, biarkan Syntegra POS mengurus transaksi, stok, dan laporan.",
    hero_cta_primary: "Coba Gratis 30 Hari",
    hero_cta_secondary: "Lihat Demo",
    hero_f1: "Multi-Cabang",
    hero_f2: "Offline Ready",
    hero_f3: "Integrasi Marketplace",
    hero_f4: "Laporan Real-time",

    // Logos
    logos_eyebrow: "Terintegrasi dengan platform yang Anda pakai",

    // Features
    features_h2: "Semua yang dibutuhkan untuk menjalankan bisnis Anda",
    features_sub:
      "Dari kasir di outlet sampai pembukuan di kantor pusat — satu sistem, satu sumber data.",

    // Showcase
    showcase_eye: "Arsitektur Sistem",
    showcase_h2: "Dirancang untuk skala & keandalan",
    showcase_sub:
      "PWA modern + aplikasi jembatan lokal untuk hardware kasir. Sinkronisasi asinkron via message queue, posting jurnal otomatis ke ERP, dan isolasi data per tenant.",
    showcase_bullets: [
      "Application Layer — API Server multi-tenant",
      "Async sync via Message Queue",
      "Dynamic account lookup ke modul akuntansi",
      "Local bridge: thermal printer, barcode, cash drawer",
      "Audit Trail & Fraud Detection",
    ],

    // HowItWorks
    how_h2: "Mulai dalam hitungan menit",
    how_sub:
      "Tidak perlu install server, tidak perlu IT. Setup awal selesai dalam satu sore.",

    // Pricing
    price_pill: "Harga jujur · tanpa biaya tersembunyi",
    price_h2_a: "Satu paket.",
    price_h2_b: "Semua yang Anda butuhkan.",
    price_sub:
      "Trial 30 hari dengan kartu kredit. Batalkan kapan saja sebelum trial berakhir, tanpa dipotong biaya.",
    price_ribbon: "🎉 PROMO HEMAT HAMPIR 50% · BERLAKU TERBATAS",
    price_per: "/bulan",
    price_note: "harga promo periode terbatas",
    price_addons_label: "Tambahan opsional",
    price_addon_user: "Tambah User",
    price_addon_branch: "Tambah Cabang",
    price_unit_user: "/user",
    price_unit_branch: "/cabang",
    price_cta: "Mulai Sekarang",
    price_trust_1: "Trial 30 hari",
    price_trust_2: "Tanpa setup fee",
    price_trust_3: "Batal kapan saja",
    price_features_h: "Yang Anda dapatkan",
    price_features_sub: "Semua fitur tanpa batas, dari hari pertama.",

    // Testimonials
    test_h2: "Apa Kata Pemilik Bisnis",
    test_sub: "Cerita nyata dari pengguna Syntegra POS di berbagai jenis usaha.",

    // FAQ
    faq_h2: "Pertanyaan yang sering ditanyakan",

    // CTA
    cta_h2: "Siap mempercepat bisnis Anda?",
    cta_sub:
      "Coba Syntegra POS gratis selama 30 hari dengan kartu kredit. Tidak perlu install server, batalkan kapan saja.",
    cta_placeholder: "email@bisnis.com",
    cta_btn: "Mulai Trial",

    // Footer
    footer_tag: "· Bagian dari ekosistem Syntegra.",
    footer_copy: "© {year} Syntegra. Semua hak dilindungi.",

    // Theme/Lang
    theme_dark: "Mode gelap",
    theme_light: "Mode terang",
  },
  en: {
    nav_fitur: "Features",
    nav_cara: "How it works",
    nav_harga: "Pricing",
    nav_testimoni: "Testimonials",
    nav_faq: "FAQ",
    nav_login: "Login",
    nav_cta: "Start 30-Day Free Trial",

    hero_badge: "Modern POS for Modern Businesses",
    hero_h1_brand: "Syntegra POS",
    hero_h1_rest: "The Smart Cashier That Handles Everything for You",
    hero_sub:
      "24/7 smooth operations, no drama, no downtime. Focus on customers — let Syntegra POS handle transactions, stock, and reports.",
    hero_cta_primary: "Start 30-Day Free Trial",
    hero_cta_secondary: "Watch Demo",
    hero_f1: "Multi-Branch",
    hero_f2: "Offline Ready",
    hero_f3: "Marketplace Integration",
    hero_f4: "Real-time Reports",

    logos_eyebrow: "Integrated with the platforms you use",

    features_h2: "Everything you need to run your business",
    features_sub:
      "From the outlet counter to the head-office books — one system, one source of truth.",

    showcase_eye: "System Architecture",
    showcase_h2: "Built for scale & reliability",
    showcase_sub:
      "A modern PWA plus a local bridge for cashier hardware. Async sync via message queue, automatic journal posting to ERP, full tenant isolation.",
    showcase_bullets: [
      "Application Layer — multi-tenant API server",
      "Async sync via message queue",
      "Dynamic account lookup into accounting",
      "Local bridge: thermal printer, barcode, cash drawer",
      "Audit trail & fraud detection",
    ],

    how_h2: "Up and running in minutes",
    how_sub:
      "No server to install, no IT required. Initial setup is done in one afternoon.",

    price_pill: "Honest pricing · no hidden fees",
    price_h2_a: "One plan.",
    price_h2_b: "Everything you need.",
    price_sub:
      "30-day trial with credit card. Cancel anytime before the trial ends — you won't be charged.",
    price_ribbon: "🎉 ALMOST 50% OFF · LIMITED TIME",
    price_per: "/month",
    price_note: "limited-time promo price",
    price_addons_label: "Optional add-ons",
    price_addon_user: "Add User",
    price_addon_branch: "Add Branch",
    price_unit_user: "/user",
    price_unit_branch: "/branch",
    price_cta: "Get Started",
    price_trust_1: "30-day trial",
    price_trust_2: "No setup fee",
    price_trust_3: "Cancel anytime",
    price_features_h: "What you get",
    price_features_sub: "All features unlimited, from day one.",

    test_h2: "What Business Owners Say",
    test_sub:
      "Real stories from Syntegra POS users across many kinds of businesses.",

    faq_h2: "Frequently asked questions",

    cta_h2: "Ready to grow faster?",
    cta_sub:
      "Try Syntegra POS free for 30 days with a credit card. No server install, cancel anytime.",
    cta_placeholder: "email@yourbusiness.com",
    cta_btn: "Start Trial",

    footer_tag: "· Part of the Syntegra ecosystem.",
    footer_copy: "© {year} Syntegra. All rights reserved.",

    theme_dark: "Dark mode",
    theme_light: "Light mode",
  },
} as const;

export type MessageKey = keyof typeof messages["id"];

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: "light" | "dark";
  setTheme: (t: "light" | "dark") => void;
};

export const AppContext = createContext<Ctx>({
  lang: "id",
  setLang: () => {},
  theme: "light",
  setTheme: () => {},
});

export function useApp() {
  return useContext(AppContext);
}

export function useT() {
  const { lang } = useApp();
  return function t<K extends MessageKey>(key: K): (typeof messages)["id"][K] {
    return messages[lang][key] as (typeof messages)["id"][K];
  };
}
