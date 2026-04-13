
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          black: '#0A0A0A',
          white: '#FFFFFF',
          violet: '#8B5CF6',
        }
      }
    },
  },
  plugins: [],
}
