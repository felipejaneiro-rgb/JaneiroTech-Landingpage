/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#0ea5e9', // Sky 500
          DEFAULT: '#0284c7', // Sky 600
          dark: '#0c4a6e', // Sky 900
        },
        secondary: {
          light: '#2dd4bf', // Teal 400
          DEFAULT: '#14b8a6', // Teal 500
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}