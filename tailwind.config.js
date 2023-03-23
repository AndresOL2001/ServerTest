/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Roboto', sans-serif, 'arial', 'Helvetica Neue', 'Noto Sans'],
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: ['1.5rem', {
        fontWeight: '400',
      }],
      '2xl': ['2rem', {
        fontWeight: '400',
      }],
      '3xl': ['2.5rem', {
        fontWeight: '400',
      }],
      '4xl': ['3rem', {
        fontWeight: '400',
      }],
      '5xl': ['3.375rem', {
        fontWeight: '400',
      }],
    },
    extend: {},
  },
  plugins: [],
}