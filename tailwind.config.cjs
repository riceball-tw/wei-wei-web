/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      'sans-serif': ['Noto Sans CJK TC', 'Noto Sans TC', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          50: '#f0f2f2',
          100: '#e1e4e6',
          200: '#c4c9cc',
          300: '#a6aeb3',
          400: '#899399',
          500: '#6b7880',
          600: '#566066',
          700: '#40484d',
          800: '#2b3033',
          900: '#15181a',
        },

        accent: {
          DEFAULT: 'rgb(var(--accent-color) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-fluid-type')({
      // your fluid type settings
      // works only with unitless numbers
      // This numbers are the defaults settings
      settings: {
        fontSizeMin: 1.125, // 1.125rem === 18px
        fontSizeMax: 1.25, // 1.25rem === 20px
        ratioMin: 1.125, // Multiplicator Min
        ratioMax: 1.2, // Multiplicator Max
        screenMin: 20, // 20rem === 320px
        screenMax: 96, // 96rem === 1536px
        unit: 'rem', // default is rem but it's also possible to use 'px'
        prefix: '', // set a prefix to use it alongside the default font sizes
        extendValues: true, // When you set extendValues to true it will extend the default values. Set it to false to overwrite the values.
      },
      // Creates the text-xx classes
      // This are the default settings and analog to the tailwindcss defaults
      // Each `lineHeight` is set unitless and we think that's the way to go especially in context with fluid type.
      values: {
        xs: [-2, 1.6],
        sm: [-1, 1.6],
        base: [0, 1.6],
        lg: [1, 1.6],
        xl: [2, 1.2],
        '2xl': [3, 1.2],
        '3xl': [4, 1.3],
        '4xl': [5, 1.4],
        '5xl': [6, 1.4],
        '6xl': [7, 1.4],
        '7xl': [8, 1.4],
        '8xl': [9, 1],
        '9xl': [10, 1],
      },
    }),
  ],
};
