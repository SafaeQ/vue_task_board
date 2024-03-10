/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      royalBlue: '#E1E4FA',
      gray92: '#EBEBEB',
      slightlyGray: '#F5F5F5',
      slightlyGrayBg: '#F5F4F4',
      dimGray: '#656565',
      black: '#000',
      gray300: 'rgb(209 213 219)',
      white: '#fff',
      orange: '#F1BD6C'
    }
  },
  plugins: [],
}

