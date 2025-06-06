import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { languages, prefixDefaultLocale, defaultLocale } from './src/i18n/i18n.ts';

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
  },
  site: 'https://weweweb.pages.dev',
  build: {
    inlineStylesheets: 'always',
  },
  i18n: {
    defaultLocale,
    locales: Object.keys(languages),
    routing: {
      prefixDefaultLocale,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [mdx(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
