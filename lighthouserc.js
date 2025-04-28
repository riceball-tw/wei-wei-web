// eslint-disable-next-line import/prefer-default-export
export default {
  ci: {
    collect: {
      numberOfRuns: 1,
      startServerCommand: 'pnpm astro preview',
      url: [
        'http://localhost:4321/en/',
        'http://localhost:4321/en/resume/',
        'http://localhost:4321/en/work/',
        'http://localhost:4321/en/faq/',
      ],
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://lhci-weweweb.zeabur.app/',
      token: process.env.LHCI_TOKEN,
    },
  },
};
