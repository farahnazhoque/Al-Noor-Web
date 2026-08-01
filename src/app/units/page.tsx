import type { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Units | Al-Noor Paper & Board Mills Ltd.',
  description: 'Manufacturing units and sister concerns of the Al-Noor Group including Kanchpur, Bhulta, and Madina Board Mills.',
};

export default function UnitsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Our Facilities"
        title="Manufacturing Units &amp; Sister Concerns"
        description="Paper and board operations are integrated within the Al-Noor Group's industrial complexes in Kanchpur, Narayanganj, and beyond."
      />
      <section className="container section">
        <div className="units-grid">
          <div className="unit-card">
            <div className="unit-card__media">
              <Image src="/1.png" alt="Paper production line at Al-Noor Paper and Board Mills, Kanchpur" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="unit-card__header">
              <h3 className="title-md">Al-Noor Paper &amp; Board Mills Ltd.</h3>
              <span className="btn-secondary btn-sm">Kanchpur</span>
            </div>
            <p className="body-sm" style={{ color: 'var(--muted)' }}>
              Established in 2010 within the Kanchpur industrial complex alongside Al-Noor Steel Complex Ltd., Al-Noor Edible Oils Ltd., and M/S. H R Printers &amp; Paper Seller, manufacturing white paper, newsprint, offset, and printing paper.
            </p>
          </div>

          <div className="unit-card">
            <div className="unit-card__media">
              <Image src="/2.png" alt="Manufacturing equipment at Makka Paper and Board Mills, Bhulta" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="unit-card__header">
              <h3 className="title-md">Makka Paper &amp; Board Mills Ltd.</h3>
              <span className="btn-secondary btn-sm">Bhulta</span>
            </div>
            <p className="body-sm" style={{ color: 'var(--muted)' }}>
              Established in 2007 at Bhulta, Narayanganj, about 5 km from Al-Noor Steel Complex Ltd. Leading producer of liner, media, and craft paper with expanded white and newsprint capacity.
            </p>
          </div>

          <div className="unit-card">
            <div className="unit-card__media">
              <Image src="/4.JPG" alt="Industrial paperboard production at Madina Board Mills" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="unit-card__header">
              <h3 className="title-md">Madina Board Mills</h3>
              <span className="btn-secondary btn-sm">Group</span>
            </div>
            <p className="body-sm" style={{ color: 'var(--muted)' }}>
              Started in 2004 by Mr. Md. Fazlul Hoque and Mr. Md. Ariful Hoque, manufacturing paperboard and allied paper products using waste paper as raw material.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
