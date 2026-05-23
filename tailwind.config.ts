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
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          light: "#E0F2F1",
          DEFAULT: "#26A69A",
          dark: "#00796B",
          accent: "#4DD0E1",
        },
        dental: {
          cyan: "#00BCD4",
          blue: "#03A9F4",
          soft: "#F0F9FF",
          teal: "#B2DFDB",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        montserrat: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
export default config;
