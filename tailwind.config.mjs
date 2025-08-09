// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001F'
      },
      fontFamily:{
        IBM_Plex_Sans:['IBM Plex Sans', sans-serif],
        EB_Garamond: ['EB Garamond', serif]
      }
    },
  },
  plugins: [],
}
 