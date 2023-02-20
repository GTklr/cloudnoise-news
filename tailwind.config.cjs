/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#1c1c28",
        secondary: "#E91e63"
      },
      fontFamily: {
        'body': "Roboto Mono"
      }
    },
  },
  plugins: [],
}
