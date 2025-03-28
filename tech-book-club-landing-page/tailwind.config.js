/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      spacing: {
        "01": "4px",
        "02": "8px",
        "03": "12px",
        "04": "16px",
        "05": "20px",
        "06": "24px",
        "07": "32px",
        "08": "40px",
        "09": "48px",
        10: "64px",
        11: "128px",
      },
      borderRadius: {
        "01": "4px",
        "02": "8px",
        "03": "12px",
      },
      colors: {
        "neutral-100": "var(--neutral-100)",
        "neutral-900": "var(--neutral-900)",
        "light-salmon-100": "var(--light-salmon-100)",
      },
      fontFamily: {
        jetbrains: ['"JetBrains Mono"', "monospace"],
        merriweather: ['"Merriweather Sans"', "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
