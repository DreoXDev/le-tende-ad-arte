// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://letendeadarte.it',
  // SCOMMENTA LA RIGA QUI SOTTO e metti il nome della tua repo su GitHub!
  base: '/le-tende-ad-arte',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), sitemap()]
});