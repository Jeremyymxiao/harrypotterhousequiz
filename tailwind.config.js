/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gryffindor: {
          primary: '#740001',
          secondary: '#D3A625',
        },
        slytherin: {
          primary: '#1A472A',
          secondary: '#2A623D',
        },
        ravenclaw: {
          primary: '#0E1A40',
          secondary: '#946B2D',
        },
        hufflepuff: {
          primary: '#FFD800',
          secondary: '#000000',
        },
      },
      fontFamily: {
        'magic-zh': ['MaShanZheng', 'sans-serif'],
        'magic-ko': ['East Sea Dokdo', 'sans-serif'],
        'magic-ru': ['Ruslan Display', 'sans-serif'],
        'magic-jp': ['Hachi Maru Pop', 'sans-serif'],
        'magic-pt': ['Berkshire Swash', 'cursive'],
        'harry': ['Harry Potter', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
