// tailwind.config.ts
import type { Config } from 'tailwindcss';
// @ts-expect-error
// tailwindcss-fluid-type has no type, so ignore ts-error
import fluidType from 'tailwindcss-fluid-type';

export default {
  plugins: [
    fluidType({
      corePlugins: {
        fontsize: false,
        lineHeight: false,
      },
      settings: {
        fontSizeMin: 1.125,
        fontSizeMax: 1.25,
        ratioMin: 1.125,
        ratioMax: 1.2,
        screenMin: 20,
        screenMax: 96,
        unit: 'rem',
        prefix: '',
        extendValues: true,
      },
      values: {
        xs: -2,
        sm: -1,
        base: 0,
        lg: 1,
        xl: 2,
        '2xl': 3,
        '3xl': 4,
        '4xl': 5,
        '5xl': 6,
        '6xl': 7,
        '7xl': 8,
        '8xl': 9,
        '9xl': 10,
      },
    }),
  ],
} satisfies Config;
