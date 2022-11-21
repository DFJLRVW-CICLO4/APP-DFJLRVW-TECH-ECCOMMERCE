/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        primary: '#003e6f',
        secondary: '#b01230',
        'bg_blue_primary': '#003e6f',
        'bg_red_secundary': '#b01230',
      },

    },
  },
  plugins: [],
}
