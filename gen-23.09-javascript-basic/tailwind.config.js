/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*{html,js}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      // backgroundImage: {
      //   'hero-pattern': "url('images/image.jpg')",
      // },
      colors: {
        'primary' : '#FD3D57'
      },
      fontFamily:{
        Jost: "'Jost', sans-serif"
      }
    },
  },
  plugins: [],
}

