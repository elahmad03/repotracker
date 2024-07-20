// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: {
          100: '#092FAC',
          200: '#0641DD',
          300: '#0086E9',
        },
      },
      backgroundImage: {
        'gradient-light-blue': 'linear-gradient(to right, #092FAC, #0641DD, #0086E9)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
