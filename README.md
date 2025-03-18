# Wei Wei Web
![Wei on lightgray background](public/assets/global/og-image.jpg)

## Getting Started

### Development

```bash
# 1. Clone the repository
git clone https://github.com/riceball-tw/wei-wei-web.git .

# 2. Install dependencies
pnpm install

# 3. Run the development server
npm run dev
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