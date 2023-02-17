import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: resolve(__dirname, 'src/svelte-konva-temp/'),
    lib: {
      entry: resolve(__dirname, 'src/exports_main.js'),
      formats: ['es'],
      fileName: 'index'
    }
    // @https://rollupjs.org/configuration-options
    // rollupOptions: {
    //    /* DEV_NOTE # inject rollup configs directly as if using rollup rather than Vite */
    // },
  },
})
