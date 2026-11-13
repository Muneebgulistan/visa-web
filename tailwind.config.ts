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
        // Luxury Private Aviation / Fintech Design Tokens
        sage: {
          DEFAULT: "#B9BAA8", // Muted sage-grey page background
          50: "#F4F5EF",
          100: "#E8E9DF",
          200: "#D6D7CB",
          300: "#B9BAA8",
          400: "#9C9D8A",
          500: "#80816E",
        },
        card: {
          light: "#DADADA",
          soft: "#E4E4DE",
          warm: "#D4D4D4",
          dark: "#111111",
        },
        luxury: {
          bg: "#B9BAA8",
          cardLight: "#DADADA",
          cardDark: "#111111",
          accent: "#A3A36B", // Olive/khaki brand accent
          highlight: "#FF9E7A", // Soft coral/salmon highlight tag
          badge: "#F03E3E", // Red notification badge
          textDark: "#111111",
          textMuted: "#6B6B6B",
        },
        // Mapped legacy tokens for backwards styling compatibility
        teal: {
          DEFAULT: "#111111",
          50: "#EFEFEA",
          100: "#E4E4DE",
          200: "#D6D7CB",
          300: "#C4C5B6",
          400: "#A3A36B",
          500: "#8A8A56",
          600: "#6E6E42",
          700: "#111111",
          800: "#1A1A1A",
          900: "#111111",
          950: "#0A0A0A",
        },
        coral: {
          DEFAULT: "#FF9E7A",
          50: "#FFF6F2",
          100: "#FFEAE2",
          200: "#FFD5C5",
          300: "#FFBBA4",
          400: "#FFAA8D",
          500: "#FF9E7A",
          600: "#F0825B",
          700: "#D96841",
          800: "#B84D29",
          900: "#91381A",
        },
        mint: {
          DEFAULT: "#B9BAA8",
          50: "#F6F7F2",
          100: "#ECEEE6",
          200: "#DADCD2",
          300: "#B9BAA8",
        },
        dark: {
          DEFAULT: "#111111",
          50: "#9E9E9E",
          100: "#828282",
          200: "#6B6B6B",
          300: "#4D4D4D",
          400: "#333333",
          500: "#222222",
          600: "#1A1A1A",
          700: "#141414",
          800: "#111111",
          900: "#0B0B0B",
        },
      },
      borderRadius: {
        DEFAULT: "24px",
        sm: "12px",
        md: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "24px",
        "3xl": "28px",
        pill: "9999px",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0, 0, 0, 0.08)",
        card: "0 10px 30px rgba(0, 0, 0, 0.06)",
        float: "0 20px 40px rgba(0, 0, 0, 0.12)",
        subtle: "0 2px 10px rgba(0, 0, 0, 0.04)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.03em",
        tighter: "-0.02em",
      },
    },
  },
  plugins: [],
};

export default config;
