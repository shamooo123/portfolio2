import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Used for canonical URLs + social previews
  site: 'https://hishaamabbasi.co.uk',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],

  build: {
    format: 'directory',
  },
});
