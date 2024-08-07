import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import { languages, prefixDefaultLocale, defaultLocale } from './src/i18n/i18n.ts';

// https://astro.build/config
export default defineConfig({
  site: 'https://weweweb.pages.dev',
  i18n: {
    defaultLocale,
    locales: Object.keys(languages),
    routing: {
      prefixDefaultLocale,
    },
  },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    mdx(),
  ],
});
