/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        neutral: {
          900: "#062630",
          700: "#385159",
          200: "#E6E1DF",
          100: "#FAF5F3",
          0: "#ffffff",
        },
        salmon: {
          500: "#FEA38F",
          100: "#FFE2D1",
          50: "#FFF5EF",
        },
      },
      spacing: {
        // Base 8px scale for better consistency
        1: "8px", // 8px
        2: "16px", // 16px
        3: "24px", // 24px
        4: "32px", // 32px
        5: "40px", // 40px
        6: "48px", // 48px
        8: "64px", // 64px
        10: "80px", // 80px
        // Micro adjustments
        "micro-1": "2px",
        "micro-2": "4px",
        "micro-3": "6px",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
        full: "999px",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Martian Mono", "monospace"],
      },
      fontSize: {
        // Mobile-first type scale
        "heading-1": ["38px", { lineHeight: "120%", letterSpacing: "-2px" }],
        "heading-1-lg": ["62px", { lineHeight: "120%", letterSpacing: "-2px" }],
        "heading-2": ["34px", { lineHeight: "130%", letterSpacing: "-2px" }],
        "heading-2-lg": ["50px", { lineHeight: "130%", letterSpacing: "-2px" }],
        "heading-3": ["24px", { lineHeight: "130%", letterSpacing: "-1px" }],
        "heading-3-lg": ["34px", { lineHeight: "130%", letterSpacing: "-1px" }],
        "body-lg": ["20px", { lineHeight: "140%", letterSpacing: "-0.5px" }],
        body: ["18px", { lineHeight: "130%", letterSpacing: "-0.5px" }],
        "body-sm": ["16px", { lineHeight: "130%", letterSpacing: "-0.5px" }],
        caption: ["14px", { lineHeight: "120%", letterSpacing: "-0.5px" }],
      },
      backgroundImage: {
        pattern: 'url("/src/assets/images/bg-pattern.svg")',
        "pattern-glow": 'url("/src/assets/images/pattern-glow.svg")',
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        // Reusable component classes
        ".gradient-text": {
          background:
            "linear-gradient(107deg, #FF9A60 -11.37%, #062630 61.84%)",
          "-webkit-background-clip": "text",
          "background-clip": "text",
          color: "transparent",
        },
        ".gradient-bg": {
          background: "linear-gradient(90deg, #FFE2D1 0%, #FFF5EF 100%)",
        },
        // Mobile-first container
        ".container-base": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: theme("spacing.2"),
          paddingRight: theme("spacing.2"),
          "@screen sm": {
            paddingLeft: theme("spacing.3"),
            paddingRight: theme("spacing.3"),
          },
          "@screen md": {
            paddingLeft: theme("spacing.4"),
            paddingRight: theme("spacing.4"),
          },
        },
      });
    },
  ],
};
