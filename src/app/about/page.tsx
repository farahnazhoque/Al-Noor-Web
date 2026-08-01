import type { Metadata } from 'next';
import StarBorderButton from '@/components/StarBorderButton';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'About | Al-Noor Paper & Board Mills Ltd.',
  description: 'Learn about the Al-Noor Group of Industries and its diversified manufacturing operations across Bangladesh.',
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Al-Noor Group at a Glance"
        title="A Leading Industrial Group in Bangladesh"
        description="The Al-Noor Group of Industries is engaged in diversified business activities including steel, paper, edible oils, agro, and development across Bangladesh."
      />
      <section className="section">
        <div className="container about-layout">
          <div>
            <p className="body-md about-copy-lead">
              The Al-Noor Group of Industries is a leading group in the country engaged in diversified business activities including manufacturing of galvanized steel sheets (CI sheets) at Kanchpur, about 25 km from Dhaka, alongside sister concerns Al-Noor Edible Oils Ltd., Al-Noor Paper &amp; Board Mills Ltd., and M/S. H R Printers &amp; Paper Seller in the same complex.
            </p>
            <p className="body-md about-copy">
              The group also operates Makka Paper &amp; Board Mills Ltd. and FAMS Agro Industries Ltd. in Bhulta, Narayanganj; Al-Noor Development Ltd., Noor Printing &amp; Packages Ltd., Al-Noor Address Ltd., and Al-Noor Agro Industries Ltd. in Kahalu, Bogra; and additional concerns across Bangladesh.
            </p>
            <p className="body-md about-copy about-copy--last">
              Quality products from the group have achieved name and fame as pioneers in galvanized steel and paper products manufacturing, establishing brand loyalty and enjoying a premium over competitors throughout Bangladesh.
            </p>
            <StarBorderButton href="/history">View Our History</StarBorderButton>
          </div>
          <div className="about-cards">
            <div className="feature-card card-gray about-card" style={{ padding: 'var(--spacing-lg)' }}>
              <h3 className="title-md" style={{ marginBottom: '8px' }}>Steel &amp; CI Sheets</h3>
              <p className="body-sm" style={{ color: 'var(--muted)' }}>Sun Brand (Surjo Marka) galvanized steel since 1986 at Kanchpur, Sonargaon.</p>
            </div>
            <div className="feature-card card-white about-card" style={{ padding: 'var(--spacing-lg)' }}>
              <h3 className="title-md" style={{ marginBottom: '8px' }}>Paper &amp; Board</h3>
              <p className="body-sm" style={{ color: 'var(--muted)' }}>White, newsprint, offset, liner, media, and craft paper across multiple mills.</p>
            </div>
            <div className="feature-card card-red about-card" style={{ padding: 'var(--spacing-lg)' }}>
              <h3 className="title-md" style={{ marginBottom: '8px', color: 'var(--on-primary)' }}>Edible Oils</h3>
              <p className="body-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>Al-Noor Edible Oils Ltd. and rice bran oil from Al-Noor Agro Industries Ltd.</p>
            </div>
            <div className="feature-card card-black about-card" style={{ padding: 'var(--spacing-lg)' }}>
              <h3 className="title-md" style={{ marginBottom: '8px', color: 'var(--on-dark)' }}>Agro &amp; Development</h3>
              <p className="body-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>Livestock, poultry, real estate, and printing &amp; packaging sister concerns.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
