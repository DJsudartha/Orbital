import { defineConfig } from 'vite'
import { react, pluginRewriteAll } from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pluginRewriteAll()],
  server: {
    watch: {
      usePolling: true
    }
  }
})
