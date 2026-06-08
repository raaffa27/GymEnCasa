import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fondo profundo, warm-tinted (nunca #000 puro — gotcha A.2 de la skill)
        bg: {
          DEFAULT: "#0b0a08",
          soft: "#13110d",
          card: "#1a1713",
          line: "rgba(245, 234, 205, 0.10)",
        },
        // Texto cream, nunca blanco puro
        ink: {
          DEFAULT: "#f4ead5",
          mute: "rgba(244, 234, 213, 0.72)",
          dim: "rgba(244, 234, 213, 0.45)",
        },
        // Acento naranja/amarillo (fitness premium)
        flame: {
          50: "#fff8eb",
          100: "#ffeac4",
          200: "#ffd486",
          300: "#ffb547",
          400: "#ff8a1f",
          500: "#ff6a00", // principal — botones de afiliado
          600: "#e54f00",
          700: "#b83b00",
          800: "#7a2700",
          900: "#3d1300",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      backgroundImage: {
        "flame-grad":
          "linear-gradient(135deg, #ffb547 0%, #ff6a00 55%, #e54f00 100%)",
        "radial-flame":
          "radial-gradient(60% 50% at 50% 0%, rgba(255,138,31,0.18) 0%, transparent 70%)",
      },
      boxShadow: {
        flame: "0 18px 60px -20px rgba(255, 106, 0, 0.45)",
        card: "0 1px 0 rgba(244,234,213,0.06) inset, 0 30px 60px -30px rgba(0,0,0,0.6)",
      },
      keyframes: {
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        meshDrift: {
          "0%, 100%": { transform: "scale(1) rotate(0deg)" },
          "50%": { transform: "scale(1.15) rotate(180deg)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        floatY: "floatY 6s ease-in-out infinite",
        meshDrift: "meshDrift 28s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
