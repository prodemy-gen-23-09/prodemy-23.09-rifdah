/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
      backgroundImage: {
        'home': "url('/public/images/image.jpg')",
      },
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

