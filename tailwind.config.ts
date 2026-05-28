import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
        },
        ink: {
          900: "#0b1220",
          800: "#111a2e",
          700: "#1a2440",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(13,148,136,0.25), 0 20px 60px -20px rgba(13,148,136,0.45)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 30% 20%, rgba(13,148,136,0.18), transparent 60%), radial-gradient(circle at 80% 0%, rgba(45,212,191,0.15), transparent 55%)",
      },
    },
  },
  plugins: [],
};
export default config;
