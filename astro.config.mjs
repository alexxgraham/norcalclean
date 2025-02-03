import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://alexxgraham.github.io',
  base: 'norcalclean',

  devToolbar: {
    enabled: false
  },

  vite: {
    plugins: [tailwindcss()],
  },
});