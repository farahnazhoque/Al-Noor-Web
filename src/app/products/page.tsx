import type { Metadata } from 'next';
import PartnerTicker from '@/components/PartnerTicker';
import ProductsCatalog from '@/components/ProductsCatalog';
import ProductsHero from '@/components/ProductsHero';

export const metadata: Metadata = {
  title: 'Products | Al-Noor Paper & Board Mills Ltd.',
  description: 'Catalog and technical specifications for white printing paper, news printing paper, medium paper, kraft paper, test liner, fluting medium, and specialty grades.',
};

export default function ProductsPage() {
  return (
    <main className="products-page">
      <ProductsHero />
      <ProductsCatalog />
      <PartnerTicker />
    </main>
  );
}
