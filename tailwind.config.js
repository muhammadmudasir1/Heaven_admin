/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customBlue: '#026CC4',
      },
      backgroundImage: theme => ({
        'gradient': `linear-gradient(to right, ${theme('colors.white')} 50%, ${theme('colors.customBlue')} 50%)`,
      }),
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'righteous': ['Righteous', 'cursive'],
    },
  },
  plugins: [
  ]
}

