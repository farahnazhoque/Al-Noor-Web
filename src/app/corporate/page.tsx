import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Corporate | Al-Noor Paper & Board Mills Ltd.',
  description: 'Mission, vision, group management, and leadership profiles of the Al-Noor Group of Industries.',
};

export default function CorporatePage() {
  return (
    <main>
      <PageHeader
        eyebrow="Governance & Leadership"
        title="Mission, Vision &amp; Leadership"
        description="Al-Noor Group takes pride in developing Bangladesh's economy through diversified industry, managed by experienced professionals sharing Group resources from head office."
      />
      <section className="container section">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xxl)' }}>
          <div className="investor-card">
            <h3 className="title-md" style={{ borderBottom: '2px solid var(--primary)', paddingBottom: '12px' }}>Mission</h3>
            <p className="body-sm" style={{ color: 'var(--muted)' }}>
              Al-Noor Group of Industries aims to be a model of dynamism and efficiency in high-tech industry of Bangladesh while performing macro responsibilities and serving the community with dedication imbued with partisan and social justice.
            </p>
          </div>
          <div className="investor-card">
            <h3 className="title-md" style={{ borderBottom: '2px solid var(--ink)', paddingBottom: '12px' }}>Vision</h3>
            <p className="body-sm" style={{ color: 'var(--muted)' }}>
              The Group is committed to continued pursuit for excellence in quality, service and productivity. Exceeding customer&apos;s expectation is the built-in approach at Al-Noor Group of Industries.
            </p>
          </div>
          <div className="investor-card" style={{ backgroundColor: 'var(--surface-soft)' }}>
            <h3 className="title-md" style={{ borderBottom: '2px dashed var(--muted-soft)', paddingBottom: '12px' }}>Group Management</h3>
            <p className="body-sm" style={{ color: 'var(--muted)' }}>
              Being a member of as large a Group, each unit is managed by the same key professionals and shares resources of the Group head office. Directors work across business units for smooth operation of Group business.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 className="display-sm" style={{ marginBottom: '8px' }}>Brief Profile of the Sponsors</h3>
          <p className="body-md" style={{ color: 'var(--muted)', maxWidth: '760px' }}>
            Each member of the current management team is well educated, with years of experience in manufacturing industry and a strong track record of consistent growth and excellent financial results.
          </p>
        </div>
        <div className="leadership-grid">
          <div className="leader-card">
            <span className="leader-role">Chairman</span>
            <h3 className="title-lg">Mr. Md. Fazlul Hoque</h3>
            <p className="body-sm" style={{ color: 'var(--muted)' }}>
              Born June 01, 1972 at Bikrampur, Munshiganj. Post-Graduate in Marketing from University of Dhaka. Chairman and co-founder of Al-Noor Steel Complex Ltd.; Managing Director of Al-Noor Agro Industries Ltd., Al-Noor Paper &amp; Board Mills Ltd., Al-Noor Edible Oils Ltd., Al-Noor Development Ltd., and Al-Noor Address Ltd.; Chairman of Makka Paper and Board Mills Ltd. and FAMS Agro Industries Ltd.
            </p>
            <p className="body-sm" style={{ color: 'var(--muted)' }}>
              His vision helped Al-Noor become the first CI sheet manufacturing company to install a Continuous Galvanizing Line. He has earned name and fame in the business community for honesty, integrity, dedication, and hard work.
            </p>
          </div>
          <div className="leader-card">
            <span className="leader-role">Director</span>
            <h3 className="title-lg">Mr. Md. Ariful Hoque</h3>
            <p className="body-sm" style={{ color: 'var(--muted)' }}>
              Born July 01, 1980 at Bikrampur, Munshiganj. MBA in Human Resource Management from Victoria University, Melbourne. Director of Al-Noor Steel Complex Ltd.; Managing Director of Makka Paper and Board Mills Ltd. and FAMS Agro Industries Ltd.; Chairman of Al-Noor Development Ltd.; Deputy Managing Director of Al-Noor Address Ltd.; and Director of Al-Noor Paper &amp; Board Mills Ltd., Al-Noor Edible Oils Ltd., and Al-Noor Agro Industries Ltd.
            </p>
            <p className="body-sm" style={{ color: 'var(--muted)' }}>
              Former member of Bangladesh Paper Mills Association. Mr. Md. Ariful Hoque has earned recognition in the business community for honesty, integrity, dedication, and a high degree of sense of responsibility.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
