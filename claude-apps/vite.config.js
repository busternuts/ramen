import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// Affiliate site lives at https://busternuts.github.io/ramen/.
// PWA hub lives at https://busternuts.github.io/ramen/apps/.
const BASE = '/ramen/apps/';

export default defineConfig({
  base: BASE,
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['apple-touch-icon.png', 'icons/*.png'],
      manifest: {
        name: 'snApps',
        short_name: 'snApps',
        description: 'A hub for mini-apps. One install, many apps inside.',
        theme_color: '#0a0a0a',
        background_color: '#0a0a0a',
        display: 'standalone',
        orientation: 'portrait',
        start_url: BASE,
        scope: BASE,
        icons: [
          { src: `${BASE}icons/icon-192.png`, sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: `${BASE}icons/icon-512.png`, sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: `${BASE}icons/icon-512-maskable.png`, sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        navigateFallback: `${BASE}index.html`,
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname.startsWith(`${BASE}assets/`),
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'app-chunks' },
          },
        ],
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          const match = id.match(/\/src\/apps\/([^/]+)\//);
          if (match) return `app-${match[1]}`;
          if (id.includes('node_modules')) return 'vendor';
        },
      },
    },
  },
});
