/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#2d2d2d",
        secondary: "#E91e63",
        third: "#171717",
        fourth: "#1e1e1e"
      },
      fontFamily: {
        'body': "Roboto Mono"
      }
    },
  },
  plugins: [],
}
