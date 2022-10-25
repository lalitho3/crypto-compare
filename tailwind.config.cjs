/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./**/*.html"
  ],
  theme: {
    extend: {
      animation : {
        'spin-slow': 'spin 30s linear infinite',
      }
    },
  },
  plugins: [],
}