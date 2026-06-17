/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#faf8f5',
        charcoal: '#2c2c2c',
        gold: '#c9a962',
        'nav-dark': '#1f1f1f',
        'nav-muted': '#545454',
      },
      maxWidth: {
        site: '1600px',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
