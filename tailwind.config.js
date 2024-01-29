/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      desktop:'1200px',
      tablet:'979px',
      landscape:'767px',
      portrait:'480px',
    },
    extend: {},
  },
  plugins: [],
}

