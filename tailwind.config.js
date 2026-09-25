/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gc-black": "#050505",
        "gc-black-2": "#0A0A0A",
        "gc-card": "#0F0F0F",
        "gc-green": "#00FF41",
        "gc-green-2": "#00E639",
        "gc-green-dark": "#003D18",
        "gc-white": "#F5F5F5",
        "gc-muted": "#8A8A8A",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "Anton", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        "led-pulse": "ledPulse 2s ease-in-out infinite",
        "scan-line": "scanLine 3s linear infinite",
        "radar-ping": "radarPing 2.5s ease-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        ledPulse: {
          "0%, 100%": { boxShadow: "0 0 8px #00FF41, 0 0 20px rgba(0,255,65,0.4)" },
          "50%": { boxShadow: "0 0 2px #00FF41, 0 0 6px rgba(0,255,65,0.1)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
        radarPing: {
          "0%": { transform: "scale(0)", opacity: "0.8" },
          "100%": { transform: "scale(1)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-12px) rotate(1deg)" },
          "66%": { transform: "translateY(-6px) rotate(-1deg)" },
        },
      },
    },
  },
  plugins: [],
};
