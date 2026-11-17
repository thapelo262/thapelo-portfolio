/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#001D39',
        'core-blue': '#0A4174',
        'cyber-cyan': '#48EAE2',
        'soft-ice': '#BDD8E7',
      }
    },
  },
  plugins: [],
}