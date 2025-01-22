/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  // darkMode: "media", // os
  darkMode: "selector",
  theme: {
    screens:{
      mobile: "400px",
      tab: '700px', /* custom break point */
    },
    extend: {},
  },
  plugins: [],
}