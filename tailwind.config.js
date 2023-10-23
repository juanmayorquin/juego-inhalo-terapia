/** @type {import('tailwindcss').Config}*/
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'russian_violet': { DEFAULT: '#3b1f52', 100: '#0c0610', 200: '#170c21', 300: '#231331', 400: '#2f1941', 500: '#3b1f52', 600: '#64358b', 700: '#8d52bd', 800: '#b38cd3', 900: '#d9c5e9' },
        'cool_gray': { DEFAULT: '#909cc2', 100: '#181c2b', 200: '#303957', 300: '#485582', 400: '#6474aa', 500: '#909cc2', 600: '#a6afce', 700: '#bcc3da', 800: '#d2d7e6', 900: '#e9ebf3' },
        'tangerine': { DEFAULT: '#f58a07', 100: '#301b01', 200: '#613703', 300: '#915204', 400: '#c26d06', 500: '#f58a07', 600: '#f9a135', 700: '#fab868', 800: '#fcd09a', 900: '#fde7cd' },
        'sandy_brown': { DEFAULT: '#f9ab55', 100: '#402202', 200: '#804405', 300: '#c06707', 400: '#f68813', 500: '#f9ab55', 600: '#faba75', 700: '#fbcb98', 800: '#fddcba', 900: '#feeedd' },
        'ghost_white': { DEFAULT: '#f7f5fb', 100: '#2a1c47', 200: '#55388d', 300: '#8567c2', 400: '#beadde', 500: '#f7f5fb', 600: '#f8f6fc', 700: '#faf8fc', 800: '#fcfbfd', 900: '#fdfdfe' }
      }
    }
  },
  plugins: []
};

