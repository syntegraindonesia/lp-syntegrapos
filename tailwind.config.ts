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
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
        },
        ink: {
          900: "#0b1220",
          800: "#111a2e",
          700: "#1a2440",
        },
      },
      fontFamily: {
        display: ['"Montserrat"', "system-ui", "sans-serif"],
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
          "linear-gradient(135deg, #1e3a8a 0%, #2563eb 45%, #38bdf8 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
