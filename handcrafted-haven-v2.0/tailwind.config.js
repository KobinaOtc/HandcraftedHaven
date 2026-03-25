/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fdf8f0",
          100: "#faf0dc",
          200: "#f4deb8",
          300: "#ecc98a",
          400: "#e2af5a",
          500: "#d89535",
        },
        terracotta: {
          50: "#fdf3ee",
          100: "#fae3d6",
          200: "#f4c4a8",
          300: "#ec9c72",
          400: "#e27043",
          500: "#c85a2a",
          600: "#a8461f",
          700: "#8a371a",
          800: "#6e2c16",
          900: "#5a2413",
        },
        forest: {
          50: "#f0f5ee",
          100: "#dcebd6",
          200: "#b8d6ac",
          300: "#8aba7a",
          400: "#609b4c",
          500: "#4a7d38",
          600: "#3a632b",
          700: "#2e4f22",
          800: "#243d1b",
          900: "#1c3016",
        },
        stone: {
          warm: "#c4b9a8",
          mid: "#8c7d6a",
          dark: "#4a3f32",
        },
        bark: "#2c1f14",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        accent: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      backgroundImage: {
        "grain-texture":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "slide-in": "slideIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
