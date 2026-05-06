import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#07090f",
        surface: "#0d1117",
        "surface-2": "#131921",
        teal: {
          DEFAULT: "#00d4aa",
          dark: "#00b87a",
          glow: "rgba(0, 212, 170, 0.15)",
          "glow-strong": "rgba(0, 212, 170, 0.3)",
        },
        ink: "#f0f6fc",
        muted: "#7d8590",
        "muted-2": "#444c56",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "mesh-1": "mesh1 18s ease-in-out infinite",
        "mesh-2": "mesh2 22s ease-in-out infinite",
        "mesh-3": "mesh3 26s ease-in-out infinite",
        "mesh-4": "mesh4 20s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "count-up": "countUp 1s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
        "border-glow": "borderGlow 3s ease-in-out infinite",
      },
      keyframes: {
        mesh1: {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)" },
          "33%": { transform: "translate(15%, -20%) scale(1.1)" },
          "66%": { transform: "translate(-10%, 15%) scale(0.9)" },
        },
        mesh2: {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)" },
          "33%": { transform: "translate(-20%, 10%) scale(1.15)" },
          "66%": { transform: "translate(20%, -15%) scale(0.95)" },
        },
        mesh3: {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)" },
          "50%": { transform: "translate(10%, 20%) scale(1.2)" },
        },
        mesh4: {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)" },
          "40%": { transform: "translate(-15%, -10%) scale(0.9)" },
          "80%": { transform: "translate(20%, 5%) scale(1.1)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        borderGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "teal-gradient":
          "linear-gradient(135deg, #00d4aa 0%, #00b87a 100%)",
        "glass-gradient":
          "linear-gradient(135deg, rgba(13,17,23,0.8) 0%, rgba(19,25,33,0.6) 100%)",
      },
      boxShadow: {
        glass: "0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        "teal-glow": "0 0 24px rgba(0, 212, 170, 0.2), 0 0 48px rgba(0, 212, 170, 0.08)",
        "teal-glow-strong": "0 0 32px rgba(0, 212, 170, 0.4)",
      },
      backdropBlur: {
        glass: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
