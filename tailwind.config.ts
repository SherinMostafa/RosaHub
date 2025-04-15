import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        italiana: ["var(--font-italiana)"],
        lato: ["var(--font-lato)"],
        barlow: ["var(--font-barlow)"],
      },
      colors: {
        primary: {
          DEFAULT: "#02ec88",
          light: "#5cb25d",
          dark: "#0f9015",
        },
        error: {
          light: "#e53529",
          dark: "#ce3025",
        },
        success: {
          DEFAULT: "#02ec88",
          light: "#5cb25d",
          dark: "#0f9015",
        },
        accent: {
          yellow: "#e6ca51",
          pink: "#b25e7e",
        },
        neutral: {
          light: "#faf6ed",
          dark: "#010101",
          grey: {
            light: "#bebab3",
            dark: "#484847",
          },
        },
      },
      backgroundImage: {
        auth: "url('/images/auth-bg.jpg')",
        root: "url('/images/nature-leaf-bg-img.jpg')",
      },
    },
  },
  plugins: [],
};

export default config;
