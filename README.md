# eBay Open Source

This is the source code for the eBay Open Source website, which of course is open source itself!

We are committed to sharing our technology with the world, and have used our own open source technologies to build this site— [Marko](https://markojs.com), [Marko Run](https://marko.run), and [evo-web](https://github.com/eBay/evo-web).

## Running Locally

```
npm install
npm run dev
```

## Overview

This project is powered by [@marko/run](https://github.com/marko-js/run).

- Run `npm run dev` to start the development server
- Run `npm run build` to build a production-ready node.js server
- Run `npm run preview` to run the production server

## Adding Pages

Pages map to the directory structure. You can add additional pages by creating files/directories under `src/routes` with `+page.marko` files. Learn more in the [`@marko/run` docs](https://github.com/marko-js/run/#file-based-routing).
