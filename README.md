# Element Plus with Nuxt 3 Minimal Starter

> 🏗 WIP (Work in Progress)
> Nuxt3 is still beta, we may need to keep updating to adapt it.

Preview: <https://nuxt-starter.element-plus.org>

We recommend to look at the [Nuxt3 Docs](https://v3.nuxtjs.org) and [Element Plus Docs](https://element-plus.org/).

## Setup

Make sure to install the dependencies

```bash
yarn install
```

## Development

Start the development server on `http://localhost:3000`

```bash
yarn dev
```

More info about [nuxt deployment](https://v3.nuxtjs.org/docs/deployment/presets).

You need set env `NITRO_PRESET=browser` to generate static html in `.output/public`.

## Production

Build the application for production:

```bash
yarn build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).

## FAQ

The current ssr is a bit of a problem and is still being resolved.

### Could not resolve './hooks/use-prevent-globalThis/index.js'

It is a bug when use vite with nuxt. (vite replace `global` with `globalThis`).
Please be patient and wait for the fix.

> https://github.com/nuxt/framework/issues/1713

## Ref

- [vitesse-nuxt3](https://github.com/antfu/vitesse-nuxt3)
