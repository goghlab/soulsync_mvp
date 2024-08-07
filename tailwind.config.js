// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-gray': '#000000', // #1a1a1a turned 1x darker
        'custom-gray': '#1a1a1a', // #2e2e2e turned 1x darker
        'custom-light-gray': '#808080', // #a0a0a0 turned 1x darker
        'custom-hover-gray': '#666666', // #808080 turned 1x darker
      },
    },
  },
  plugins: [],
}
