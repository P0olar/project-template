import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
      allowedHosts: ['dc33-187-62-80-251.ngrok-free.app']
    }
})
