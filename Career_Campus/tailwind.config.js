
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
        comfortaa: ['Comfortaa', 'sans-serif'],
        bebas: ['Bebas Neue', 'cursive'],
        pacifico: ['Pacifico', 'cursive'],
        slab: ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [],
}