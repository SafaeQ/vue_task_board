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
      dimGray: '#656565'
    }
  },
  plugins: [],
}

