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
        "brand-brown": "#8C5B4F", // Approximate brown from hero text gradient start
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
        "text-gradient":
          "linear-gradient(107deg, #FF9A60 -11.37%, #062630 61.84%)", // Existing hero text gradient
        "section-gradient": "linear-gradient(90deg, #FFE2D1 0%, #FFF5EF 100%)", // Gradient from style guide
        // Simple grid pattern using SVG data URI - using neutral-200 for grid color
        "grid-pattern": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23E6E1DF' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      },
      // Add text fill utility for gradient text
      textFillColor: (theme) => theme("borderColor"),
      backgroundClip: {
        text: "text",
      },
    },
  },
  plugins: [
    // Plugin to add text-fill utilities
    function ({ addUtilities, theme, e }) {
      const utilities = Object.entries(theme("textFillColor")).map(
        ([key, value]) => ({
          [`.${e(`text-fill-${key}`)}`]: { "-webkit-text-fill-color": value },
        })
      );
      addUtilities(utilities);
    },
  ],
};
