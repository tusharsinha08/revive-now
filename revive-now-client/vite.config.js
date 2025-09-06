import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    force: true, // This will force Vite to re-optimize dependencies on startup
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
