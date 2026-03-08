import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hishaamabbasi.co.uk',
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap()
  ],
  build: {
    format: 'directory'
  }
});
