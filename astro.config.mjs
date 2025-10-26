// @ts-check

import sitemap from '@astrojs/sitemap';
import solidJs from '@astrojs/solid-js';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  image: {
    responsiveStyles: true,
  },
  integrations: [sitemap(), icon(), solidJs()],
  site: 'http://localhost/',
});
