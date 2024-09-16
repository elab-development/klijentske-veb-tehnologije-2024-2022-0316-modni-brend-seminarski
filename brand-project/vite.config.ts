/// <reference types="vitest"/>
/// <reference types="vite/client"/>
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port: 3000
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: './src/app/tests/setup.ts'
  }
})
