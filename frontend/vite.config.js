import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import sitemapPlugin from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemapPlugin({
       hostname: "https://tusitio.com",
     }),
  ],
})
