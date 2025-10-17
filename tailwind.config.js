/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
      colors: {
        'deep-blue': '#0D3B66',
        'healing-sky': '#4A90E2',
        'gentle-pink': '#E8A3B9',
        'care-blossom': '#F5CEDD',
        'mist-blue': '#A9C6EB',
        'rose-glow': '#F8DFE7',
        'graphite': '#4A4F57',
      }
    },
  },
  plugins: [],
}
