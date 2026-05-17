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
        primary: "#0d9488",
        "primary-dark": "#0f766e",
        "primary-darker": "#134e4a",
        accent: "#f59e0b",
        danger: "#dc2626",
        warning: "#ea580c",
        success: "#16a34a",
      },
      fontFamily: {
        cairo: ["Cairo", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
