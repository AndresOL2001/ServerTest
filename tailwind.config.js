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
    colors:{
      'primary':'#0072B5',
      'secondary':'#1B3156',
      'light':'#EFEFEF',
      'accent':'#EDD30F',
      'dark-border':'#183860',
      'light-border':'#D4E1E8',
      'dark':'#4E4E4E',
      'muted':'#CECECE',
      'success':'#2B690B',
      'info':'#305696',
      'danger':'#9F2E13',
      'warning':'#7B5C09'
    },
    extend: {},
  },
  plugins: [],
}