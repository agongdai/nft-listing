/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // Toggle dark-mode based on class or data-mode=”dark”
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    screens: {
      '2xl': { max: '1536px' },
      // => @media (max-width: 1536px) { ... }

      xl: { max: '1200px' },
      // => @media (max-width: 1200px) { ... }

      lg: { max: '900px' },
      // => @media (max-width: 900px) { ... }

      md: { max: '600px' },
      // => @media (max-width: 600px) { ... }

      sm: { max: '420px' },
      // => @media (max-width: 420px) { ... }
    },
    extend: {
      spacing: {
        1: '0.4rem',
        2: '0.8rem',
        3: '1.2rem',
        4: '1.6rem',
        5: '2rem',
        6: '2.4rem',
        7: '2.8rem',
        8: '3.2rem',
        9: '3.6rem',
        10: '4rem',
        11: '4.4rem',
        12: '4.8rem',
        14: '5.6rem',
        16: '6.4rem',
        20: '8rem',
        24: '9.6rem',
        28: '11.2rem',
        32: '12.8rem',
        36: '14.4rem',
        40: '16rem',
        44: '17.6rem',
        48: '19.2rem',
        52: '20.8rem',
        56: '22.4rem',
        60: '24rem',
        64: '25.6rem',
        72: '28.8rem',
        80: '32rem',
        96: '38.4rem',
      },
      fontSize: {
        xs: '1.2rem',
        sm: '1.4rem',
        base: '1.6rem',
        lg: '1.8rem',
        xl: '2rem',
        '2xl': '2.4rem',
        '3xl': '3rem',
        '4xl': '3.6rem',
        '5xl': '4.8rem',
        '6xl': '6rem',
        '7xl': '7.2rem',
        '8xl': '9.6rem',
        '9xl': '12.8rem',
      },
    },
  },
  plugins: [],
};
