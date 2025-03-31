/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'Martian Mono'", "monospace"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      colors: {
        // Neutral colors
        neutral: {
          900: "#062630",
          700: "#385159",
          200: "#E6E1DF",
          100: "#FAF5F3",
          0: "#ffffff",
        },
        salmon: {
          500: "#FEA36F",
          100: "#FFE2D1",
          50: "#FFF5EF",
        },
      },
      fontSize: {
        // Text presets from style guide
        "preset-1": [
          "62px",
          { lineHeight: "120%", letterSpacing: "-2px", fontWeight: "700" },
        ],
        "preset-1-mobile": [
          "38px",
          { lineHeight: "120%", letterSpacing: "-2px", fontWeight: "700" },
        ],
        "preset-2": [
          "50px",
          { lineHeight: "130%", letterSpacing: "-2px", fontWeight: "600" },
        ],
        "preset-2-mobile": [
          "34px",
          { lineHeight: "130%", letterSpacing: "-2px", fontWeight: "600" },
        ],
        "preset-3": [
          "34px",
          { lineHeight: "130%", letterSpacing: "-1px", fontWeight: "600" },
        ],
        "preset-3-mobile": [
          "24px",
          { lineHeight: "110%", letterSpacing: "-1px", fontWeight: "600" },
        ],
        "preset-4": [
          "24px",
          { lineHeight: "110%", letterSpacing: "-1px", fontWeight: "600" },
        ],
        "preset-4-regular": [
          "24px",
          { lineHeight: "110%", letterSpacing: "-1px", fontWeight: "400" },
        ],
        "preset-5": [
          "20px",
          { lineHeight: "140%", letterSpacing: "-0.5px", fontWeight: "400" },
        ],
        "preset-5-semibold": [
          "20px",
          { lineHeight: "140%", letterSpacing: "-0.5px", fontWeight: "600" },
        ],
        "preset-6": [
          "16px",
          { lineHeight: "130%", letterSpacing: "-1px", fontWeight: "600" },
        ],
        "preset-7": [
          "14px",
          { lineHeight: "120%", letterSpacing: "-1px", fontWeight: "400" },
        ],
      },
      spacing: {
        "025": "2px",
        "050": "4px",
        "075": "6px",
        100: "8px",
        150: "12px",
        200: "16px",
        250: "20px",
        300: "24px",
        400: "32px",
        500: "40px",
        600: "48px",
        800: "64px",
        1000: "80px",
      },
      borderRadius: {
        0: "0px",
        4: "4px",
        6: "6px",
        8: "8px",
        10: "10px",
        12: "12px",
        16: "16px",
        20: "20px",
        24: "24px",
        full: "999px",
      },
      backgroundImage: {
        "text-gradient":
          "linear-gradient(107deg, #FF9A60 -11.37%, #062630 61.84%)",
        gradient: "linear-gradient(90deg, #FFE2D1 0%, #FFF5EF 100%)",
      },
    },
  },
  plugins: [],
};
