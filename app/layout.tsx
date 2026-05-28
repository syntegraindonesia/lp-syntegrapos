import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SYNTEGRA POS — Sistem Kasir Modern untuk Retail & F&B",
  description:
    "Aplikasi POS berbasis web (PWA) untuk retail, restoran, dan cafe. Multi-cabang, multi-gudang, offline-ready, terintegrasi akuntansi & marketplace.",
  themeColor: "#0d9488",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
