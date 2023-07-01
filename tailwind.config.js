/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '5rem',
        '3xl': '6rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px', // Desktop
        xl: '1280px',
        '2xl': '1366px',
        '3xl': '1536px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px', // Desktop
      xl: '1280px',
      '2xl': '1366px',
      '3xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      blue: {
        DEFAULT: '#2446FB',
        50: '#D8DEFE',
        100: '#C4CDFE',
        200: '#9CACFD',
        300: '#748AFC',
        400: '#4C68FC',
        500: '#2446FB',
        600: '#0427E3',
        700: '#031EAC',
        800: '#021475',
        900: '#010B3D',
        950: '#010622',
      },
      zinc: colors.zinc,
      red: colors.red,
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-pt-serif)'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
