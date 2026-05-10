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
        bg: "#FFFFFF",
        surface: "#F8FAFC",
        "surface-2": "#EFF6FF",
        teal: {
          DEFAULT: "#0070F2",
          dark: "#003D8F",
          glow: "rgba(0, 112, 242, 0.12)",
          "glow-strong": "rgba(0, 112, 242, 0.25)",
        },
        ink: "#0F172A",
        muted: "#475569",
        "muted-2": "#94A3B8",
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
          "linear-gradient(135deg, #0070F2 0%, #003D8F 100%)",
        "glass-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(239,246,255,0.8) 100%)",
      },
      boxShadow: {
        glass: "0 4px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
        "teal-glow": "0 0 24px rgba(0, 112, 242, 0.2), 0 0 48px rgba(0, 112, 242, 0.08)",
        "teal-glow-strong": "0 0 32px rgba(0, 112, 242, 0.4)",
      },
      backdropBlur: {
        glass: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
