/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lastbutton:'rgba(163, 62, 61, .6)',
      },
      fontFamily: {
        defaultfont: ["Work Sans", "sans-serif"],
      },
     
    },
  },
  plugins: [],
};