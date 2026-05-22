import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF8F5",
        burgundy: "#5C1A2E",
        red: { vencare: "#C8102E" },
        orange: { vencare: "#E87722" },
        warmblack: "#1C1410",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)"],
        raleway: ["var(--font-raleway)"],
      },
    },
  },
  plugins: [],
};

export default config;
