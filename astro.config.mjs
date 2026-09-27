// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://geertjanknapen1.github.io',
  base: '/astro-portfolio',
  integrations: [sitemap()],
});