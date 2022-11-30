/// <reference types="vitest" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './test/setup.js',
    clearMocks: true,
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:6475',
        changeOrigin: true,
      },
    },
  },
})
