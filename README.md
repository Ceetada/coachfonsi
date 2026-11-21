# Coach Fonsi

A Next.js App Router website for the Coach Fonsi personal fitness brand. The home page presents the coach, results, testimonials, coaching tiers, and digital guides, with WhatsApp enquiries enabled through a single setting.

## Run locally

```sh
npm ci
npm run dev
```

Open the local URL printed by Next.js. The repo uses Node.js 22.18 or later. The fonts are bundled at build time and hosted with the site.

## Checks

```sh
npm run lint
npm run typecheck
npm test
npm run build
```

Run `npm run start` to serve the production build. Check [the content guide](COACH_FONSI_CONTENT_GUIDE.md) for the media directories, configuration fields, and launch steps. The [reference audit](docs/reference-audit.md) and [implementation summary](docs/implementation-summary.md) record the design decisions and verification.
