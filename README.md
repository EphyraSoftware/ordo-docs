# ordo-docs

Source for the Ordo documentation site, served at `docs.ordo.ephyrasoftware.com`.

This site is built with [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/), and deployed by [Netlify](https://www.netlify.com/) on every push to `main`.

## Develop locally

```sh
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

To produce a production build:

```sh
npm run build
```

The output is written to `dist/`.

## Layout

```
src/content/docs/
├── index.mdx           # Landing page
├── getting-started.mdx
├── concepts.mdx
├── reference.mdx
└── architecture.mdx
```

The sidebar is configured in `astro.config.mjs`. As subpages are added under each section, convert that section's sidebar entry from a single link to a group with `autogenerate: { directory: '<section>' }` (or hand-listed `items`).

## Contributing

Spotted a typo, a confusing page, or a missing detail? Pull requests are welcome. Small fixes do not need a prior issue — open a PR directly. For larger changes, open an issue first so the direction can be agreed before you invest the time.

The Ordo project itself lives at [`EphyraSoftware/ordo`](https://github.com/EphyraSoftware/ordo).
