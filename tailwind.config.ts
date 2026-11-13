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
        teal: {
          DEFAULT: "#0F766E",
          50: "#F0FAF9",
          100: "#CCFBF1",
          200: "#99F6E4",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0D9488",
          700: "#0F766E",
          800: "#115E59",
          900: "#134E4A",
          950: "#042F2E",
        },
        coral: {
          DEFAULT: "#F97360",
          50: "#FFF5F4",
          100: "#FFE8E5",
          200: "#FFD4CF",
          300: "#FFB0A6",
          400: "#FA8C7D",
          500: "#F97360",
          600: "#E0533E",
          700: "#BD3A26",
          800: "#9C2E1D",
          900: "#7F2A1C",
        },
        mint: {
          DEFAULT: "#F0FAF9",
          50: "#FAFEFE",
          100: "#F0FAF9",
          200: "#E1F6F4",
          300: "#C9EFEA",
        },
        dark: {
          DEFAULT: "#1B2B2A",
          50: "#8B9E9C",
          100: "#6C807E",
          200: "#506361",
          300: "#384A48",
          400: "#273837",
          500: "#1B2B2A",
          600: "#152221",
          700: "#0E1817",
          800: "#09100F",
          900: "#040707",
        },
      },
      borderRadius: {
        DEFAULT: "14px",
        lg: "14px",
        xl: "16px",
        "2xl": "20px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
