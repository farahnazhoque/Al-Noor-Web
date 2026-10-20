'use client';

import Image from 'next/image';
import { FloatingPathsBackground } from '@/components/ui/floating-paths';
import { paperProducts, productCategories } from '@/lib/products';

export default function ProductsHero() {
  return (
    <FloatingPathsBackground position={1} className="products-paths">
      <section className="container products-hero">
        <div className="hero-content hero-content-glass products-hero__copy">
          <span className="eyebrow page-header-eyebrow">Catalog &amp; Technical Specifications</span>
          <h1 className="display-lg">Paper Grades Produced</h1>
          <p className="body-lg hero-lead">
            A complete breakdown of Al-Noor Paper &amp; Board Mills Ltd. offerings across printing,
            newsprint, medium, kraft, liner, fluting, and specialty grades.
          </p>
          <span className="products-intro__count">{paperProducts.length} catalog grades</span>

          <nav className="products-jump-nav products-hero__jump-nav" aria-label="Product categories">
            {productCategories.map((category) => (
              <a key={category.id} href={`#${category.id}`} className="products-jump-nav__link">
                <span className="products-jump-nav__number">{category.number}</span>
                {category.title}
              </a>
            ))}
          </nav>
        </div>

        <div className="hero-image-card products-hero__media">
          <Image
            src="/paper_rolls.jpg"
            alt="Paper rolls at Al-Noor manufacturing facility"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 900px) 100vw, 40vw"
            priority
          />
        </div>
      </section>
    </FloatingPathsBackground>
  );
}
