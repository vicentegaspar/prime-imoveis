// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Stable Cloudflare Pages alias (per-deploy hashes like
// 4f7dcd19.prime-imoveis.pages.dev rotate on every push, so we anchor
// canonical/sitemap URLs to the stable production alias).
// TODO(infra): swap to the custom domain once it is wired.
const SITE_URL = 'https://prime-imoveis.pages.dev';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    responsiveStyles: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
