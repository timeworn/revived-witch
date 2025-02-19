/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [],
  },
  ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
};
