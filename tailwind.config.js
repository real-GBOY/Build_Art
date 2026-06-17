/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f0e8d9',
        page: '#f0e8d9',
        charcoal: '#2c2c2c',
        gold: '#c9a962',
        'nav-dark': '#424d26',
        'nav-muted': '#545454',
      },
      maxWidth: {
        site: '1600px',
      },
      fontFamily: {
        body: ['Cairo', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
