import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // <-- ADD THIS LINE

  preview: {
    allowedHosts: true  // This allows all hosts
  },
  server: {
    allowedHosts: true  // This allows all hosts
  }
})