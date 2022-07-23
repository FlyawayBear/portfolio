/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'darkgray': '#334155',
      'dark': '#0a0a0a',
      'lilbitdark': '#121212',
      'tabledark': '#171616',
      'etabledaaark': '#1f1e1e',
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
    },
    extend: {
      fontFamily: {
        sans: ['Varela Round', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
