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
        drum: {
          bg: "#F5F4F0",
          "card-light": "#FAFAF8",
          "text-primary": "#1A1A1A",
          "text-secondary": "#666666",
          "text-tertiary": "#999999",
          "border-warm": "#E0DDD8",
          "border-neutral": "#CCCCCC",
          primary: "#D85A30",
          "primary-light": "#FDF5F3",
          "primary-medium": "#E8C8BE",
          success: "#1D9E75",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
