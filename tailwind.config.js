/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#e8dcc8',
          300: '#d4c4a8',
          400: '#b89e78',
          500: '#a08460',
          600: '#8b6d4f',
          700: '#735841',
          800: '#5f4a38',
          900: '#4f3e30',
        },
        secondary: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
        accent: {
          50: '#fdf4f3',
          100: '#fae8e6',
          200: '#f5d4d0',
          300: '#ecb5ad',
          400: '#e08a7e',
          500: '#cf6d5e',
          600: '#b95648',
          700: '#99453b',
          800: '#7d3b33',
          900: '#67342e',
        },
        cream: '#faf8f5',
        charcoal: '#2c2c2c',
        gold: '#c9a962',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
