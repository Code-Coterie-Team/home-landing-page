/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors:{
        primary:'#1f3e72',
        shdaow:'0px 23px 21px -8px rgba(136, 160, 255, .25)',
        secondry:'rgba(255, 255, 255, .78)',
        wrapercolor:"#131110",
        firstblue:'#4066ff',
        secondblue:'#2949c6',
        pureorange:' #ff922d',
        lightorange:'#ffb978',
        fontcolor:' #8c8b8b',
        buttoncolor:"#eef",
        lightblue:'#eeeeff',
        bordercolor:'rgba(255, 255, 255, .12)',
        fontblucolor:'#1f3e72',
        bgblur:"rgba(255, 255, 255, 0.52)"
      }
    },
  },
  plugins: [],
}

