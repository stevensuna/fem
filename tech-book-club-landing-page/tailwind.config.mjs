/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "neutral-900": "#062630",
        "neutral-700": "#385159",
        "neutral-200": "#E6E1DF",
        "neutral-100": "#FAF5F3",
        "neutral-0": "#ffffff",
        "light-salmon-500": "#FEA38F",
        "light-salmon-100": "#FFE2D1",
        "light-salmon-50": "#FFF5EF",
      },
      spacing: {
        // Keep existing spacing
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
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"], // Inter as the primary sans-serif
        mono: ["Martian Mono", "monospace"],
      },
      backgroundImage: {
        pattern: 'url("/src/assets/images/bg-pattern.svg")',
      },

      fontSize: {
        "preset-1": ["62px", { lineHeight: "120%", letterSpacing: "-2px" }],
        "preset-1-mobile": [
          "38px",
          { lineHeight: "120%", letterSpacing: "-2px" },
        ],
        "preset-2": ["50px", { lineHeight: "130%", letterSpacing: "-2px" }],
        "preset-2-mobile": [
          "34px",
          { lineHeight: "130%", letterSpacing: "-2px" },
        ],
        "preset-3": ["34px", { lineHeight: "130%", letterSpacing: "-1px" }],
        "preset-3-mobile": [
          "24px",
          { lineHeight: "110%", letterSpacing: "-1px" },
        ],
        "preset-4": ["24px", { lineHeight: "110%", letterSpacing: "-1px" }],
        "preset-4-regular": [
          "24px",
          { lineHeight: "110%", letterSpacing: "-1px" },
        ],
        "preset-5": ["20px", { lineHeight: "140%", letterSpacing: "-0.5px" }],
        "preset-5-semi-bold": [
          "20px",
          { lineHeight: "140%", letterSpacing: "-0.5px" },
        ],
        "preset-6": ["18px", { lineHeight: "130%", letterSpacing: "-1px" }],
        "preset-6-mobile": [
          "16px",
          { lineHeight: "130%", letterSpacing: "-1px" },
        ],
        "preset-7": ["14px", { lineHeight: "120%", letterSpacing: "-1px" }],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".gradients-text": {
          background:
            "linear-gradient(107deg, #FF9A60 -11.37%, #062630 61.84%)",
          "-webkit-background-clip": "text",
          "background-clip": "text",
          color: "transparent",
        },
        ".gradients-background": {
          background: "linear-gradient(90deg, #FFE2D1 0%, #FFF5EF 100%)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
