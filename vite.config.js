import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    /** @param {outDir} is optional, default is <root>/dist */
    outDir: resolve(__dirname, 'src/svelte-konva-linked/'), 
    lib: {
      /** @param {entry} it consider that 'src/exports_main.js' contains minimum exports to make sure it would work in Svelte (Svelte is significantly fussy at it)  */
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
