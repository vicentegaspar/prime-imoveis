# Prime Imóveis


Single-listing real estate landing page for a property up for rent. Built to be
fast, SEO-strong, and conversion-oriented, deployed entirely on the Cloudflare
edge.

> Status: bootstrapped. "Hello World" pipeline is green. Frontend / SEO /
> Content agents take it from here.

---

## Architecture

| Concern         | Choice                                                         |
| --------------- | -------------------------------------------------------------- |
| Framework       | [Astro](https://astro.build) (static output, zero JS by default) |
| Language        | TypeScript (strict)                                            |
| Styling         | [Tailwind CSS](https://tailwindcss.com) v4 (Vite plugin)        |
| Hosting         | [Cloudflare Pages](https://pages.cloudflare.com) (static)       |
| Image hosting   | `/public/assets/images` + [Cloudflare Images](https://www.cloudflare.com/products/cloudflare-images/) for hot path |
| Object storage  | [Cloudflare R2](https://www.cloudflare.com/products/r2/) (S3 API) — reserved |
| Backend (forms) | [Cloudflare Workers](https://workers.cloudflare.com) — reserved |
| SEO             | `@astrojs/sitemap`, JSON-LD `RealEstateListing`, OG tags        |
| CI/CD           | GitHub → Cloudflare Pages (auto build on push)                  |

### Repository layout

```
.
├── astro.config.mjs        # site URL, sitemap, image config
├── wrangler.toml           # Cloudflare Pages + reserved Worker config
├── public/
│   ├── assets/images/      # property photos (optimized originals)
│   ├── favicon.ico
│   └── favicon.svg
└── src/
    ├── components/         # Hero, Gallery, Details, Map, ContactForm…
    ├── layouts/
    │   └── BaseLayout.astro
    ├── data/
    │   └── property.ts     # single source of truth for the listing
    ├── pages/
    │   └── index.astro
    └── styles/
        └── global.css      # @import "tailwindcss"
```

---

## Agent ownership map

The project is split across four agents. Each agent reads this section as its
brief.

### 1. Infrastructure Agent
- Owns: GitHub repo, Cloudflare Pages project, Worker for the form, `wrangler.toml`, R2 bucket.
- Inputs: `package.json`, `wrangler.toml`.
- Deliverables:
  - Repo pushed to GitHub (private).
  - Cloudflare Pages project linked: build cmd `npm run build`, output `dist/`, Node 22+.
  - Custom domain wired and TLS active.
  - (Phase 2) Worker route for `/api/contact` once Backend is greenlit.

### 2. Frontend Agent
- Owns: `src/components/**`, `src/layouts/**`, `src/pages/index.astro`.
- Components to deliver:
  - `Hero.astro` — primary photo, address, CTA `Quero agendar visita`.
  - `Gallery.astro` — responsive image grid using Astro `<Image />`.
  - `Details.astro` — rooms, area, parking, features.
  - `MapEmbed.astro` — lazy-loaded map iframe (or static image).
  - `ContactForm.astro` — name, phone, message; posts to Worker (phase 2).
- Source of truth: `src/data/property.ts`. Do not hardcode listing data inside components.

### 3. Performance / SEO Agent
- Owns: head meta, structured data, Web Vitals.
- Deliverables:
  - JSON-LD `RealEstateListing` (or `Apartment`/`House` + `Offer`) injected via `<slot name="head" />`.
  - `robots.txt` and sitemap submitted to Google Search Console.
  - LCP < 2.0s, CLS < 0.05, INP < 200ms on Mobile Lighthouse.
  - `<Image />` everywhere; preconnect to Cloudflare Images CDN.

### 4. Content / Assets Agent
- Owns: photos, copy, address, pricing.
- Deliverables:
  - 8–20 photos under `public/assets/images/` (≤ 1600px, mozjpeg q≈80, or AVIF).
  - Filled `src/data/property.ts` with real values.
  - OG image at `public/assets/images/og-default.jpg` (1200x630).

---

## Local commands

```sh
npm install              # install dependencies
npm run dev              # http://localhost:4321
npm run build            # static output → dist/
npm run preview          # serve dist/ locally
```

---

## Deploying to Cloudflare Pages

**Option A — Dashboard (recommended for first deploy):**

1. Push the repo to GitHub.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Build settings: framework `Astro`, build command `npm run build`, output `dist/`, Node version `22`.
4. First deploy lands at `https://prime-imoveis.pages.dev`.

**Option B — Direct upload via Wrangler (CI / one-off):**

```sh
npm run build
npx wrangler pages deploy dist --project-name prime-imoveis
```

After the production domain is live, update `SITE_URL` in `astro.config.mjs`
and re-deploy so canonical/OG/sitemap URLs are correct.
