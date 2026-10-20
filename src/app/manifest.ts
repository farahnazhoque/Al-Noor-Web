import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Al-Noor Paper & Board Mills Ltd.',
    short_name: 'Al-Noor Papers',
    description:
      'Al-Noor Group — paper and board manufacturing across Bangladesh, including white printing paper, newsprint, kraft, liner, and specialty grades.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f9f9f9',
    theme_color: '#dc2626',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/favicon-32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
