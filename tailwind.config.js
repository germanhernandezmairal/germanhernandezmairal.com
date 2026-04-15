/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        signature: ['Great Vibes', 'cursive'],
      },
      colors: {
        'brand-blue': '#003366',
        'brand-amber': '#ffc107',
        'brand-amber-dark': '#ffb300',
      },
      screens: {
        'xs': '320px',
        'sm-xs': '375px',
        'md-xs': '425px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeInUp 0.7s ease forwards',
        'fade-up-1': 'fadeInUp 0.7s ease 0.15s forwards',
        'fade-up-2': 'fadeInUp 0.7s ease 0.3s forwards',
        'fade-up-3': 'fadeInUp 0.7s ease 0.45s forwards',
        'slide-left': 'slideInLeft 0.7s ease forwards',
        'slide-right': 'slideInRight 0.7s ease forwards',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 51, 102, 0.1)',
        'card-hover': '0 8px 30px rgba(0, 51, 102, 0.18)',
      },
      textShadow: {
        'custom-light-orange': '2px 2px 4px rgba(0, 0, 0, 0.15)',
        'custom-dark-blue': '2px 2px 4px #003366',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    function ({ addUtilities }) {
      addUtilities({
        '.highlight-amber': {
          backgroundColor: '#ffc107',
          color: '#003366',
          paddingLeft: '0.375rem',
          paddingRight: '0.375rem',
        },
        '.highlight-blue': {
          backgroundColor: '#003366',
          color: '#ffc107',
          paddingLeft: '0.375rem',
          paddingRight: '0.375rem',
        },
        '.underline-amber': {
          position: 'relative',
          display: 'inline-block',
          color: '#003366',
        },
        '.underline-amber::before': {
          content: "''",
          position: 'absolute',
          left: '0',
          bottom: '2px',
          width: '100%',
          height: '2px',
          backgroundColor: '#ffc107',
        },
      });
    },
  ],
};
