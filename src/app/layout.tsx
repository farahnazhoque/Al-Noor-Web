import type { Metadata, Viewport } from 'next';
import './globals.css';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import VisitTracker from '@/components/VisitTracker';

const siteName = 'Al-Noor Paper & Board Mills Ltd.';
const siteDescription =
  'Al-Noor Group manufactures white paper, newsprint, offset paper, kraft, liner, and specialty grades through Al-Noor Paper & Board Mills Ltd. and sister concerns across Bangladesh.';

export const metadata: Metadata = {
  metadataBase: new URL('https://alnoorbc.site'),
  title: {
    default: `${siteName} | Al-Noor Group of Industries`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    'Al-Noor Group',
    'Al-Noor Group of Industries',
    'Al-Noor Paper',
    'paper mill Bangladesh',
    'white printing paper',
    'newsprint',
    'kraft paper',
    'test liner',
    'fluting medium',
    'Kanchpur',
    'Narayanganj',
  ],
  authors: [{ name: 'Al-Noor Group' }],
  creator: 'Al-Noor Group',
  publisher: 'Al-Noor Group of Industries',
  category: 'Manufacturing',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_BD',
    siteName,
    title: `${siteName} | Al-Noor Group of Industries`,
    description: siteDescription,
    url: '/',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Al-Noor Paper & Board Mills Ltd. logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} | Al-Noor Group of Industries`,
    description: siteDescription,
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#dc2626',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <VisitTracker />
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
