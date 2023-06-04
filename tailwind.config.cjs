/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(var(--primary-color-50) / <alpha-value>)',
          100: 'rgb(var(--primary-color-100) / <alpha-value>)',
          200: 'rgb(var(--primary-color-200) / <alpha-value>)',
          300: 'rgb(var(--primary-color-300) / <alpha-value>)',
          400: 'rgb(var(--primary-color-400) / <alpha-value>)',
          500: 'rgb(var(--primary-color-500) / <alpha-value>)',
          600: 'rgb(var(--primary-color-600) / <alpha-value>)',
          700: 'rgb(var(--primary-color-700) / <alpha-value>)',
          800: 'rgb(var(--primary-color-800) / <alpha-value>)',
          900: 'rgb(var(--primary-color-900) / <alpha-value>)',
          1000: 'rgb(var(--primary-color-1000) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent-color) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [require('tailwindcss-fluid-type')],
};
