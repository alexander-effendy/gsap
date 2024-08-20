/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.js",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif'], // Adding the custom font
      },
    },
  },
  plugins: [],
}

