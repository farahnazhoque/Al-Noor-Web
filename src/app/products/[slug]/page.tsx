import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductBento from '@/components/ProductBento';
import { getProductBySlug, paperProducts } from '@/lib/products';

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return paperProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: `${product.name} | Al-Noor Paper & Board Mills Ltd.`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <ProductBento product={product} />
    </main>
  );
}
