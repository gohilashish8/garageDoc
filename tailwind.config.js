/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
   
  ],
  theme: {
    extend: {
      colors: {
        primary: '#646BEC',
      },
      screens: {
        'xs': '420px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
],
} 