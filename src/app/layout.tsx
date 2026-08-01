import type { Metadata, Viewport } from 'next';
import './globals.css';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import VisitTracker from '@/components/VisitTracker';

export const metadata: Metadata = {
  title: 'Al-Noor Paper & Board Mills Ltd. | Al-Noor Group of Industries',
  description: 'Al-Noor Paper & Board Mills Ltd. manufactures white paper, newsprint, offset paper, and printing paper as part of the Al-Noor Group of Industries, Bangladesh.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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
