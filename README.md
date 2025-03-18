# [Wei Wei Web](https://weweweb.pages.dev/en) - Personal website

[Resume](https://weweweb.pages.dev/en/resume/) /
[Portfolio](https://weweweb.pages.dev/en/work/) /
[Q&A](https://weweweb.pages.dev/en/faq/)

> My personal frontend resume / portfolio / Q&A



## Motivation

Since I am a frontend developer, why not create a portfolio website myself?

- [Let's Build a Personal Frontend Portfolio - Preparation](https://www.webdong.dev/en/post/lets-build-a-portfolio/)


## Getting Started

### Development

```bash
# 1. Clone the repository
git clone https://github.com/riceball-tw/wei-wei-web.git .

# 2. Install dependencies
pnpm install

# 3. Run the development server
pnpm run dev
```

### Build

```bash
# a. Locally
# Deploy the contents of the `./dist` folder wherever you like.
pnpm install
pnpm build
pnpm preview

# b. Build docker image
docker build -t <your-astro-image-name> .
docker run -p <local-port>:<container-port> <your-astro-image-name>
```

## License

The source code in this repository is licensed under the MIT License.
Non-code content (e.g., images, articles, documentation) is copyrighted and all rights are reserved.
