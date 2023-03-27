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
      'sans': ['Roboto', 'sans-serif', 'arial', 'Helvetica Neue', 'Noto Sans'],
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

    },
    extend: {
      colors:{
      'blue-primary':'#0072B5',
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
      'warning':'#7B5C09',
      blue:{
        50:'#B9D3E2',
        100:'#9FC5DB',
        200:'#84B7D5',
        300:'#6AA9CE',
        400:'#4F9BC8',
        500:'#358DC1',
        600:'#1A7FBB',
        700:'#036AAA',
        800:'#095C95',
        900:'#06639F',
        1000:'#0C558A',
        1100:'#0F4D80',
        1200:'#124675',
        1300:'#153F6B',
      },
      gray:{
        50:'#D6D6D6',
        100:'#BDBDBD',
        200:'#A4A4A4',
        300:'#8B8B8B',
        400:'#727272',
        500:'#595959',
        600:'#404040',
        700:'#272727',
        800:'#0F0F0F',
      }
    },
  },
  plugins: [],
}