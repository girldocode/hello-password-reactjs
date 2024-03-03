/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // enable dark mode
  theme: {
    extend: {
      fontFamily: {
        InriaSans: ["Inria Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
