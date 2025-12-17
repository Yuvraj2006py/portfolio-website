import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#9333EA",
          soft: "#F3E8FF",
          dark: "#7C3AED",
          light: "#A855F7"
        }
      },
      boxShadow: {
        card: "0 18px 30px rgba(15, 23, 42, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;


