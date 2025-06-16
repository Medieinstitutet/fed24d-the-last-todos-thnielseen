// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/scss'),
      '@base': path.resolve(__dirname, 'src/scss/base'),
      '@abstracts': path.resolve(__dirname, 'src/scss/abstracts'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@abstracts" as *;`,
      },
    },
  },
})
