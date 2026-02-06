import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://faesr.ai',
  output: 'static',
  build: {
    assets: '_astro',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
