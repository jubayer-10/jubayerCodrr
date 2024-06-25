/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    screens: {
      'sm': '500px',
 

      'md': '960px',
  

      'lg': '1440px',

    },
    fontFamily:{
       'poppins':['Poppins', 'sans-serif'],
       'syne': ["Syne", "sans-serif"],
       'oswald': ["Oswald", "sans-serif"],
    },
    clipPath: {
      mypolygon: "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
  },

  extend: {
    animation : {
      wiggle: 'wiggle 3s ease-in-out infinite',
     },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'translateY(10px)' },
        '50%': { transform: 'translateY(0px)' },
      }
   }, 
  },
},
  plugins: [
    require('tailwind-clip-path'),
  ],
}

