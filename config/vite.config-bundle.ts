import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  base: './',
  build: {
    assetsDir: '',
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, '../src/js/index.ts'),
      name: 'jqFuwatto',
      fileName: 'jqFuwatto',
    },
  },
  // build: {
  //   outDir: './dist',
  //   rollupOptions: {
  //     input: {
  //       main: resolve(__dirname, '../src/js/index.ts'),
  //       // nested: resolve(__dirname, 'nested/index.html')
  //     },
  //   },
  // },
})
