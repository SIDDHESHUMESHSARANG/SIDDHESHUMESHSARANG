/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        display: ["var(--font-rubik-glitch)", "system-ui"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, oklch(var(--bc) / 0.1) 1px, transparent 1px), linear-gradient(to bottom, oklch(var(--bc) / 0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-sm": "20px 20px",
        "grid-lg": "40px 40px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["business"],
  },
};
