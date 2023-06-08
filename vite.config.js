import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  watch: {
    include: 'src/**',
    exclude: 'node_modules/**',
  },
  hmr: true,
})
