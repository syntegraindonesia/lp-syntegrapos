import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        accent: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
        },
        navy: {
          800: "#0c1b4d",
          900: "#091538",
          950: "#050d24",
        },
        ink: {
          900: "#0b1220",
          800: "#111a2e",
          700: "#1a2440",
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        sans: ['"Lato"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(37,99,235,0.25), 0 20px 60px -20px rgba(37,99,235,0.45)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 30% 20%, rgba(37,99,235,0.18), transparent 60%), radial-gradient(circle at 80% 0%, rgba(56,189,248,0.18), transparent 55%)",
        "brand-grad":
          "linear-gradient(135deg, #091538 0%, #1e3a8a 30%, #2563eb 65%, #22d3ee 100%)",
        "hero-mood":
          "radial-gradient(ellipse at 80% 20%, rgba(34,211,238,0.18), transparent 55%), linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
