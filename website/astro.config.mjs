// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  vite: {
    preview: {
      host: true,                // allow external hosts (not just localhost)
      port: 4000,                // match your PM2 port
      allowedHosts: [
        'scrapnet.eu',
        'www.scrapnet.eu',
        'localhost'
      ],
    },
  },
});
