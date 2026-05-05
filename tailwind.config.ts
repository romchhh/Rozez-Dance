import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5EDE3",
        "cream-dark": "#F0E6D8",
        "warm-gray": "#E8DDD3",
        dark: "#1A1008",
        red: {
          DEFAULT: "#8B1A1A",
          light: "#C0392B",
        },
        gold: "#C9A96E",
        "text-muted": "#7A6A5A",
        "text-body": "#4A3A2A",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        barlow: ["var(--font-barlow)", "sans-serif"],
        "barlow-condensed": ["var(--font-barlow-condensed)", "sans-serif"],
      },
      animation: {
        "hero-zoom": "heroZoom 12s ease-in-out infinite alternate",
        "fade-up": "fadeUp 1.2s ease both",
        "scroll-line": "scrollLine 2s ease-in-out infinite",
      },
      keyframes: {
        heroZoom: {
          from: { transform: "scale(1.05)" },
          to: { transform: "scale(1.12)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scrollLine: {
          "0%,100%": { transform: "scaleY(1)", opacity: "1" },
          "50%": { transform: "scaleY(0.5)", opacity: "0.3" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
