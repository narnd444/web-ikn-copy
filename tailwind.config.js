/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Gotham' : ['Gotham', 'sans-serif'], 
      },
      colors: {
        
        'primary': '#E2AA5F', 
        'secondary': '#A95C25', 
        'accent': '#000000', 
        'custom-old-grey': '#647D70', 
        'custom-grey' : '#F3F4F6',
      },
      backgroundImage: {
        'hero-background': "url('/src/assets/background/bghero.png')",
        'identity-background': "url('/src/assets/background/identity.png')",
        'hover-background': "url('/src/assets/background/hover.png')",
        'footer-texture': "url('/img/footer-texture.png')",
        'logo': "url('/src/assets/logo/logo-notext.png')",
      }
    },
  },
  plugins: [],
};