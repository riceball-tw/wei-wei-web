// eslint-disable-next-line import/prefer-default-export
export const favicons = {
  '16': 'https://bucket-wei.webdong.dev/favicon/favicon-16x16.png',
  '32': 'https://bucket-wei.webdong.dev/favicon/favicon-32x32.png',
  '512': 'https://bucket-wei.webdong.dev/favicon/favicon-512x512.png',
  'android-chrome-192': 'https://bucket-wei.webdong.dev/favicon/android-chrome-192x192.png',
  'android-chrome-512': 'https://bucket-wei.webdong.dev/favicon/android-chrome-512x512.png',
  'apple-touch-icon': 'https://bucket-wei.webdong.dev/favicon/apple-touch-icon.png',
};

export const globalOgImage = {
  url: 'https://bucket-wei.webdong.dev/global/og-image.jpg',
  height: 630,
  width: 1200,
  type: 'image/jpeg',
};

export const website = {
  name: 'WeiWeb',
  emojiStatus: '🍙',
  socials: [
    {
      name: 'Blog',
      url: 'https://www.webdong.dev/',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/riceball-tw',
    },
    {
      name: 'Threads',
      url: 'https://www.threads.net/@webdong.dev',
    },
    {
      name: 'Behance',
      url: 'https://www.behance.net/riceballwei',
    },
    {
      name: 'CakeResume',
      url: 'https://www.cakeresume.com/me/Riceball-wei',
    },
  ],
  get copyright() {
    return `© ${new Date().getFullYear()} ${
      this.name
    } All rights reserved. Theme <a class="underline" href='https://github.com/riceball-tw/letter'>Letter</a> licensed under MIT.`;
  },
};
