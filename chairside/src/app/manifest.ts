import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Chairside',
    short_name: 'Chairside',
    description: 'Voice notes to client cards and follow-up texts for hair, nail and lash pros.',
    start_url: '/today',
    scope: '/',
    display: 'standalone',
    orientation: 'any',
    background_color: '#F6F1ED',
    theme_color: '#6B2D5C',
    categories: ['business', 'productivity'],
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
    shortcuts: [{ name: 'Today', url: '/today' }],
  };
}
