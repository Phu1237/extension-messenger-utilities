const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo[600],
        'primary-hover': colors.indigo[700],
        'primary-ring': colors.indigo[500],
        'primary-text': colors.white,
        secondary: colors.indigo[100],
        'secondary-hover': colors.indigo[200],
        'secondary-ring': colors.indigo[500],
        'secondary-text': colors.indigo[700],
        'white-hover': colors.gray[50],
        'white-ring': colors.indigo[500],
        'white-text': colors.gray[700],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
