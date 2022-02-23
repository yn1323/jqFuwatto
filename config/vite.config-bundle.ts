import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  base: './',
  build: {
    assetsDir: '',
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, '../src/index.ts'),
      name: 'jqFuwatto',
      fileName: 'jqFuwatto',
    },
  },
})
