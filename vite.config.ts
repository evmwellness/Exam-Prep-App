import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'

// GitHub Pages serves this project from /Exam-Prep-App/, not the domain root.
const base = process.env.VITE_BASE_PATH ?? '/'

export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/icon-192.png', 'icons/icon-512.png'],
      manifest: {
        name: 'GP Exam Prep — AKT & KFP',
        short_name: 'GP Exam Prep',
        description: 'Offline MCQ practice for the RACGP AKT and KFP exams',
        theme_color: '#0f172a',
        background_color: '#0f172a',
        display: 'standalone',
        start_url: base,
        scope: base,
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2,webmanifest}'],
        navigateFallback: `${base}index.html`,
        // Hush (public/sleep/) and Seven Minute Sunrise are separate standalone apps
        // under public/; Hush has its own service worker, so it is not precached here.
        globIgnores: ['sleep/**'],
        navigateFallbackDenylist: [/\/sleep\//, /\/seven-minute-sunrise\//],
      },
      devOptions: {
        enabled: false,
      },
    }),
  ],
})
