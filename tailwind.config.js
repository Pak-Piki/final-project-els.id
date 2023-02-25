/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      spacing: {
        '2%': '2%', //30%
        '10%': '10%', //30%
        '20%': '20%', //25%
        '35%': '35%', //25%
        '40%': '40%', //40%
        '50%': '50%', //50%
        '80%': '80%', //80%
      },
    },
  },
  plugins: [],
};
