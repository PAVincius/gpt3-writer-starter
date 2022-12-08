/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'oneday': ['ONEDAY'],
        'gugi': ['gugi'],
      }
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  plugins: [],
}
