import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    // 1. Ensures binding to the required host (0.0.0.0)
    host: '0.0.0.0',
    // 2. Uses the port provided by the environment ($PORT), defaulting if needed
    port: process.env.PORT || 4173,
    // 3. Allows the live domain
    allowedHosts: [
      'lotus-polyclinic1.onrender.com',
    ],
  }
})