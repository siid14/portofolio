import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      //  color variables for system theme support
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // playstation-inspired colors
        "ps-blue": "#0072ce", // playstation's signature blue
        "ps-navy": "#003791", // darker blue for gradients
        "ps-black": "#000000", // pure black for contrast
        "ps-gray": {
          100: "#f7f7f7", // light gray backgrounds
          200: "#e4e4e4", // medium light gray
          400: "#a1a1a1", // medium gray for secondary text
          600: "#666666", // darker gray for primary text
          800: "#333333", // very dark gray for borders
        },
      },
      // box shadows for that classic ps1 chunky look
      boxShadow: {
        retro: "4px 4px 0px rgba(0, 0, 0, 1)",
        "retro-soft": "4px 4px 0px rgba(0, 0, 0, 0.5)",
        "retro-inset": "inset 4px 4px 0px rgba(0, 0, 0, 0.5)",
      },
      // gradients common in ps1-era interfaces
      backgroundImage: {
        "ps-gradient": "linear-gradient(to right, #003791, #0072ce)",
        "ps-gradient-vertical": "linear-gradient(to bottom, #003791, #0072ce)",
        "ps-gradient-dark": "linear-gradient(to right, #001f4d, #004c8c)",
      },
      // typography settings for the ps1 era look
      fontFamily: {
        retro: ["Press Start 2P", "system-ui"],
        ps: ["Arial", "Helvetica", "sans-serif"],
      },
      // border widths for the chunky retro feel
      borderWidth: {
        retro: "3px",
      },
      // custom spacing for consistent retro layouts
      spacing: {
        retro: "0.25rem",
        "retro-2": "0.5rem",
        "retro-4": "1rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
