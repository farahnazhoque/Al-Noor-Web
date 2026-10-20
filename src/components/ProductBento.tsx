'use client';

import Image from 'next/image';
import ProductBentoEqualRow, { type BentoEqualPanel } from '@/components/ProductBentoEqualRow';
import ProductEstimateCalculator from '@/components/ProductEstimateCalculator';
import StarBorderButton from '@/components/StarBorderButton';
import { useEffect, useRef } from 'react';
import type { PaperProduct } from '@/lib/products';
import { catalogOverview, productCategories } from '@/lib/products';

type ProductBentoProps = {
  product: PaperProduct;
};

const applicationsByCategory: Record<string, string[]> = {
  printing: ['Textbook printing', 'Commercial publishing', 'Institutional supply', 'Offset & digital press'],
  industrial: ['Corrugating & converting', 'Industrial packaging', 'Wrapping & protection', 'Medium-weight board'],
  corrugated: ['Corrugated box plants', 'Carton board production', 'Export packaging', 'FMCG cartons'],
  specialty: ['Custom converting', 'Specialized industrial use', 'Bespoke print programs', 'OEM specifications'],
};

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
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function ProductBento({ product }: ProductBentoProps) {
  const pageRef = useScrollReveal<HTMLDivElement>();
  const category = productCategories.find((item) => item.id === product.categoryId);
  const applications = applicationsByCategory[product.categoryId] ?? [];

  const bottomRowPanels: BentoEqualPanel[] = [];

  if (product.customization) {
    bottomRowPanels.push({
      id: 'ordering',
      className: 'product-bento__panel--ordering',
      label: 'Ordering Options',
      title: 'Customization & Roll Specifications',
      body: <p className="body-sm product-bento__custom-copy">{product.customization}</p>,
      footer: (
        <StarBorderButton href="/contact" variant="secondary" className="product-bento__custom-cta">
          Contact Sales Team
        </StarBorderButton>
      ),
    });
  }

  bottomRowPanels.push({
    id: 'applications',
    className: 'product-bento__panel--applications',
    label: 'Typical Applications',
    title: 'Where This Grade Is Used',
    body: (
      <div className="product-bento__applications">
        {applications.map((application) => (
          <span key={application} className="product-bento__application-chip">
            {application}
          </span>
        ))}
      </div>
    ),
  });

  bottomRowPanels.push(
    product.grades
      ? {
          id: 'grades',
          className: 'product-bento__panel--grades',
          label: 'Fiber Composition',
          title: 'Raw Material Grades',
          body: (
            <ul className="product-bento__grades">
              {product.grades.map((grade) => (
                <li key={grade.name} className="product-bento__grade-row">
                  <strong>{grade.name}</strong>
                  <span>{grade.composition}</span>
                </li>
              ))}
            </ul>
          ),
        }
      : {
          id: 'grades',
          className: 'product-bento__panel--grades',
          label: 'Supply Details',
          title: 'Format & Delivery',
          body: (
            <ul className="product-bento__grades">
              {product.specs.map((spec) => (
                <li key={spec.label} className="product-bento__grade-row">
                  <strong>{spec.label}</strong>
                  <span>{spec.value}</span>
                </li>
              ))}
            </ul>
          ),
        },
  );

  return (
    <section className="product-bento section" ref={pageRef}>
      <div className="container">
        <header className="product-bento__header" data-reveal>
          <div className="product-bento__header-copy">
            <span className="product-bento__pill">{category?.title ?? 'Paper Grade'}</span>
            <h1 className="display-lg">{product.name}</h1>
            <p className="body-lg product-bento__lead">{product.description}</p>
            <div className="product-bento__highlights">
              <span className="product-bento__highlight-tag">{product.highlight}</span>
              <span className="product-bento__highlight-tag">{catalogOverview.certification}</span>
            </div>
            <div className="product-bento__actions">
              <StarBorderButton href="/contact" variant="primary" className="product-bento__cta">
                Request a Quote
              </StarBorderButton>
              <ProductEstimateCalculator product={product} />
            </div>
          </div>
          <div className="product-bento__hero-image">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 420px"
              priority
            />
          </div>
        </header>

        <div className="product-bento__grid">
          <div className="product-bento__panel product-bento__panel--specs" data-reveal>
            <div className="product-bento__panel-head">
              <span className="product-bento__panel-label">Technical Parameters</span>
              <h2 className="title-md">Specification Sheet</h2>
            </div>
            <div className="product-bento__tiles">
              {product.specs.map((spec) => (
                <div key={spec.label} className="product-bento__tile">
                  <span className="product-bento__tile-label">{spec.label}</span>
                  <strong className="product-bento__tile-value">{spec.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="product-bento__panel product-bento__panel--overview" data-reveal data-reveal-delay="1">
            <div className="product-bento__panel-head">
              <span className="product-bento__panel-label">Product Overview</span>
              <h2 className="title-md">Grade Summary</h2>
            </div>
            <p className="body-sm product-bento__overview-copy">{product.shortDescription}</p>
            <ul className="product-bento__overview-list">
              <li>
                <span>Category</span>
                <strong>{category?.title}</strong>
              </li>
              <li>
                <span>Grade Range</span>
                <strong>{product.highlight}</strong>
              </li>
              <li>
                <span>Manufacturing</span>
                <strong>Kanchpur, Narayanganj</strong>
              </li>
            </ul>
          </div>

          <ProductBentoEqualRow panels={bottomRowPanels} />
        </div>
      </div>
    </section>
  );
}
