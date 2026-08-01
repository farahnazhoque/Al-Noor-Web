import { partners } from '@/lib/content';

export default function PartnerTicker() {
  return (
    <section className="section partner-ticker-section" style={{ borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span className="body-sm" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, color: 'var(--muted)' }}>Trusted Supply Partners</span>
          <h3 className="title-lg" style={{ marginTop: '8px' }}>Serving Leading Institutions &amp; Newspapers</h3>
        </div>
      </div>
      <div className="partner-ticker" aria-label="Trusted supply partners">
        <div className="partner-ticker-track">
          {[...partners, ...partners].map((name, index) => (
            <div className="accred-logo" key={`${name}-${index}`}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
