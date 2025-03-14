import type { Config } from "tailwindcss";

export default {
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
      },
      fontFamily:{
        heading: ["var(--font-rebeqa)"],
        body:["var(--font-suse)"]
      },
      backgroundColor:{
        light:"#ECE7E1",
        dark:"#1A1818",
      },
      textColor:{
        light:"#ECE7E1",
        dark:"#1A1818",
      }
    },
  },
  plugins: [],
} satisfies Config;
