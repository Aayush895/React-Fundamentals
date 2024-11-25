import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Ensure jsdom is used for testing
    globals: true, // This allows you to use global test functions like `test()`, `expect()`, etc.
    setupFiles: './test/setup.js', // Optional: for custom test setup
    css: true,
  },
})
