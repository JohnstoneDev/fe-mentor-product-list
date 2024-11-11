/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    fontFamily : {
      global : ['Red Hat Text', 'sans-serif'],
    },
    fontSize : {
      'heading' : ['30px', {
          lineHeight : '40px',
          letterSpacing : '0px',
          fontWeight : '700',
        }
      ],
    'regular' : ['16px', {
        lineHeight : '28px',
        letterSpacing : '0px',
        fontWeight : '400',
      }
    ],
  },
    screens: {
      'mobile' : '375px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    colors : {
      'red'      : 'hsl(14, 86%, 42%)',
      'green'    : 'hsl(159, 69%, 38%)',
      'rose-50'  : 'hsl(20, 50%, 98%)',
      'rose-100' : 'hsl(13, 31%, 94%)',
      'rose-300' : 'hsl(14, 25%, 72%)',
      'rose-400' : 'hsl(7, 20%, 60%)',
      'rose-500' : 'hsl(12, 20%, 44%)',
      'rose-900' : 'hsl(14, 65%, 9%)',
    },
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
