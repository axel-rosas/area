import { defineConfig } from 'vite'

export default defineConfig({
  base: '/area/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
