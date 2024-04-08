/** @type {import('tailwindcss').Config} */
const colorstailwind = require('tailwindcss/colors')
module.exports = {
  content: ["./*.{html,js,ts}", "./**/*.{html,js,ts}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
          'sombre': {800:'#161616',
                     700:'#313131'},
      }
    },
    plugins: [],
  }
}