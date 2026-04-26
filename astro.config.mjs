// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// Su GitHub Actions, process.env.GITHUB_ACTIONS è sempre "true"
// In locale (npm run dev) è undefined → base = '/' → localhost:4321/
const base = process.env.GITHUB_ACTIONS ? '/le-tende-ad-arte' : '/';

// https://astro.build/config
export default defineConfig({
  site: 'https://letendeadarte.it',
  base,
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), sitemap()]
});