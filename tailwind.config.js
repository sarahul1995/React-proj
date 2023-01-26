/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  // variants:{
  //   extend:{
  //     primary,
  //     danger,
  //     solid
  //   }
  // },
  image:{
    extend:{}
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
