// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-gray': '#0d0d0d', // Darker than #1a1a1a
        'custom-gray': '#1c1c1c', // Darker than #2e2e2e
        'custom-light-gray': '#8c8c8c', // Darker than #a0a0a0
        'custom-hover-gray': '#6e6e6e', // Darker than #808080
      },
    },
  },
  plugins: [],
}
