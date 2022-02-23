import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  base: './',
  mode: 'development',
  build: {
    outDir: './docs',
  },
})
