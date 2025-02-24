import type { APIRoute } from 'astro';

// https://web.dev/articles/add-manifest
// eslint-disable-next-line import/prefer-default-export
export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      name: "Wei's Website",
      icons: [
        { src: 'assets/global/favicon/android-chrome-192x192.png', type: 'image/png', sizes: '192x192' },
        { src: 'assets/global/favicon/android-chrome-512x512.png', type: 'image/png', sizes: '512x512' },
        { src: 'assets/global/favicon/favicon-512x512.png', type: 'image/png', sizes: '512x512', purpose: 'maskable' },
      ],
      start_url: '/',
      display: 'fullscreen',
      theme_color: '#15181a',
      background_color: '#f6f6f6',
    }),
  );
