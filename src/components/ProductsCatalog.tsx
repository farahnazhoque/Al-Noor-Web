'use client';

import Image from 'next/image';
import Link from 'next/link';
import StarBorderButton from '@/components/StarBorderButton';
import { useEffect, useRef } from 'react';
import {
  catalogOverview,
  getProductsByCategory,
  productCategories,
} from '@/lib/products';

function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) {
      return;
    }

    const items = root.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -48px 0px' },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function ProductsCatalog() {
  const pageRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={pageRef}>
      <div className="products-catalog">
        {productCategories.map((category) => {
          const products = getProductsByCategory(category.id);

          return (
            <section
              className="products-category section"
              id={category.id}
              key={category.id}
              aria-labelledby={`${category.id}-title`}
            >
              <div className="container">
                <header className="products-category__header" data-reveal>
                  <span className="products-category__number">{category.number}</span>
                  <div className="products-category__heading">
                    <h2 className="title-lg" id={`${category.id}-title`}>
                      {category.title}
                    </h2>
                    <p className="body-md products-category__description">{category.description}</p>
                  </div>
                </header>

                <div className="products-flow">
                  {products.map((product, productIndex) => (
                    <Link
                      href={`/products/${product.slug}`}
                      key={product.slug}
                      className="product-flow-card"
                      data-reveal
                      data-reveal-delay={String(Math.min(productIndex + 1, 4))}
                    >
                      <div className="product-flow-card__media">
                        <Image
                          src={product.image}
                          alt={product.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 280px"
                        />
                        <span className="product-flow-card__badge">{product.highlight}</span>
                      </div>
                      <div className="product-flow-card__body">
                        <h3 className="title-md">{product.name}</h3>
                        <p className="body-sm product-flow-card__copy">{product.shortDescription}</p>
                        <ul className="product-flow-card__specs">
                          {product.specs.slice(0, 2).map((spec) => (
                            <li key={spec.label}>
                              <span>{spec.label}</span>
                              <strong>{spec.value}</strong>
                            </li>
                          ))}
                        </ul>
                        <span className="product-flow-card__cta">
                          View specifications
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="products-capabilities section">
        <div className="container">
          <header className="products-capabilities__header" data-reveal>
            <span className="eyebrow products-capabilities__eyebrow">Manufacturing at scale</span>
            <h2 className="title-lg">Production &amp; Facility Capabilities</h2>
            <p className="body-lg products-capabilities__lead">
              ISO-certified production with dedicated warehousing and export-ready packaging standards.
            </p>
          </header>
          <div className="products-capabilities__grid">
            {[
              { label: 'Annual Output', value: catalogOverview.annualOutput },
              { label: 'Manufacturing Plant', value: catalogOverview.plantArea },
              { label: 'Storage Warehouses', value: catalogOverview.warehouseArea },
              { label: 'Quality Certification', value: catalogOverview.certification },
            ].map((item, index) => (
              <div
                className="products-capability-card"
                key={item.label}
                data-reveal
                data-reveal-delay={String(index + 1)}
              >
                <h3 className="title-md">{item.label}</h3>
                <p className="body-sm">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="products-capabilities__cta" data-reveal data-reveal-delay="2">
            <StarBorderButton href="/contact">
              Request a quote
            </StarBorderButton>
          </div>
        </div>
      </section>
    </div>
  );
}
