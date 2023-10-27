/** @type {import('tailwindcss').Config}*/
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: { 'plum_(web)': { DEFAULT: '#faaff7', 100: '#50054d', 200: '#9f0a9a', 300: '#ef0fe7', 400: '#f55ef0', 500: '#faaff7', 600: '#fbbef9', 700: '#fccefa', 800: '#fddefc', 900: '#feeffd' }, 'ruddy_blue': { DEFAULT: '#52a1fa', 100: '#021f40', 200: '#043e81', 300: '#065dc1', 400: '#127df8', 500: '#52a1fa', 600: '#74b3fb', 700: '#97c6fc', 800: '#bad9fd', 900: '#dcecfe' }, 'turquoise': { DEFAULT: '#55d6be', 100: '#0c302a', 200: '#176153', 300: '#23917d', 400: '#2fc2a7', 500: '#55d6be', 600: '#78decc', 700: '#9ae7d9', 800: '#bcefe5', 900: '#ddf7f2' }, 'alice_blue': { DEFAULT: '#ebf9ff', 100: '#004562', 200: '#0089c4', 300: '#27beff', 400: '#89dcff', 500: '#ebf9ff', 600: '#effaff', 700: '#f3fbff', 800: '#f7fdff', 900: '#fbfeff' }, 'dark_slate_gray': { DEFAULT: '#2a4747', 100: '#080e0e', 200: '#111c1c', 300: '#192a2a', 400: '#213939', 500: '#2a4747', 600: '#477979', 700: '#69a7a7', 800: '#9bc4c4', 900: '#cde2e2' } }

    }
  },
  plugins: [
    require('tailwindcss-animated')
  ]
};

