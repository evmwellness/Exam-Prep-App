'use client';

import { useEffect } from 'react';

/** Registers the service worker that makes the app installable and gives an offline fallback. */
export function ServiceWorker() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production' || !('serviceWorker' in navigator)) return;
    navigator.serviceWorker.register('/sw.js', { scope: '/' }).catch((err) => console.warn('SW registration failed', err));
  }, []);
  return null;
}
