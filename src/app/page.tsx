import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="container hero">
        <div className="hero-content">
          <h1 className="display-xl">Setting the Standard for Premium Paper in Bangladesh</h1>
          <p className="body-md" style={{ fontSize: '20px', color: 'var(--muted)', maxWidth: '600px' }}>
            Al Noor Paper Mills combines decades of expertise with modern technology to deliver world-class paper products for every industry.
          </p>
          <div className="hero-buttons">
            <a href="#products" className="btn-primary">Explore Products</a>
            <a href="#about" className="btn-secondary">Our Story</a>
          </div>
        </div>
        <div className="hero-image-card">
          <Image src="/factory_hero.jpg" alt="Al Noor Factory Exterior" fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 40vw" priority />
        </div>
      </section>

      {/* Stats Section */}
      <section className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">25+</span>
            <span className="stat-label">Years of Excellence</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50k</span>
            <span className="stat-label">Tons Annual Capacity</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Recycled Options</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">B2B Partners</span>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="container section" id="products">
        <div style={{ textAlign: 'center', marginBottom: '64px', maxWidth: '700px', margin: '0 auto 64px' }}>
          <h2 className="display-lg" style={{ marginBottom: '16px' }}>Our Core Products</h2>
          <p className="body-md" style={{ color: 'var(--muted)', fontSize: '18px' }}>Engineered for performance and sustainability, our paper products meet the rigorous demands of global standards.</p>
        </div>
        <div className="feature-grid">
          <div className="feature-card card-red">
            <div className="card-image-wrapper">
              <Image src="/paper_rolls.jpg" alt="Industrial Paper Rolls" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            </div>
            <h3 className="title-lg">Industrial Kraft Paper</h3>
            <p className="body-md" style={{ color: 'rgba(255,255,255,0.9)' }}>High-strength kraft paper designed for heavy-duty packaging, corrugated boxes, and industrial wrapping applications.</p>
          </div>
          
          <div className="feature-card card-white">
            <div className="card-image-wrapper">
              <Image src="/quality_control.jpg" alt="Premium Printing Paper" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            </div>
            <h3 className="title-lg">Premium Printing Paper</h3>
            <p className="body-md" style={{ color: 'var(--muted)' }}>Bright, smooth, and consistent paper optimized for high-volume commercial printing and publishing houses.</p>
          </div>
          
          <div className="feature-card card-black">
            <div className="card-image-wrapper">
              <Image src="/specialty_paper.jpg" alt="Specialty Paper Grades" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            </div>
            <h3 className="title-lg">Specialty Grades</h3>
            <p className="body-md" style={{ color: 'rgba(255,255,255,0.7)' }}>Custom-engineered paper solutions for specialized needs, including greaseproof paper and high-absorbency tissue.</p>
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="section" style={{ borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)', backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span className="body-sm" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, color: 'var(--muted)' }}>Quality & Standards</span>
            <h3 className="title-lg" style={{ marginTop: '8px' }}>Global Certifications & Accreditations</h3>
          </div>
          <div className="accreds-row">
            <div className="accred-logo">ISO 9001:2015</div>
            <div className="accred-logo">FSC Certified</div>
            <div className="accred-logo">ISO 14001:2015</div>
            <div className="accred-logo">BSTI Quality</div>
            <div className="accred-logo">Green Industrial</div>
          </div>
        </div>
      </section>

      {/* Factory Units Section */}
      <section className="container section" id="units">
        <div style={{ textAlign: 'center', marginBottom: '64px', maxWidth: '700px', margin: '0 auto 64px' }}>
          <h2 className="display-lg" style={{ marginBottom: '16px' }}>Our Manufacturing Units</h2>
          <p className="body-md" style={{ color: 'var(--muted)', fontSize: '18px' }}>Operating high-capacity plants in major industrial hubs to ensure uninterrupted paper supply across Bangladesh.</p>
        </div>
        <div className="units-grid">
          <div className="unit-card">
            <div style={{ position: 'relative', width: '100%', height: '220px', borderRadius: 'var(--rounded-md)', overflow: 'hidden', marginBottom: 'var(--spacing-md)' }}>
              <Image src="/gazipur_unit.jpg" alt="Al Noor Gazipur Unit 1" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 className="title-md">Al Noor Unit 1</h3>
              <span className="btn-secondary" style={{ height: '28px', padding: '0 12px', fontSize: '12px', borderRadius: 'var(--rounded-xs)' }}>Gazipur</span>
            </div>
            <p className="body-sm" style={{ color: 'var(--muted)' }}>
              Our primary newsprint and writing paper production plant. Spanning over 50 acres with state-of-the-art fully automated paper machinery.
            </p>
          </div>

          <div className="unit-card">
            <div style={{ position: 'relative', width: '100%', height: '220px', borderRadius: 'var(--rounded-md)', overflow: 'hidden', marginBottom: 'var(--spacing-md)' }}>
              <Image src="/narayanganj_unit.jpg" alt="Al Noor Narayanganj Unit 2" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 className="title-md">Al Noor Unit 2</h3>
              <span className="btn-secondary" style={{ height: '28px', padding: '0 12px', fontSize: '12px', borderRadius: 'var(--rounded-xs)' }}>Narayanganj</span>
            </div>
            <p className="body-sm" style={{ color: 'var(--muted)' }}>
              Dedicated to industrial kraft paper and cardboard packaging sheets. Located close to the river terminal for convenient transport.
            </p>
          </div>

          <div className="unit-card">
            <div style={{ position: 'relative', width: '100%', height: '220px', borderRadius: 'var(--rounded-md)', overflow: 'hidden', marginBottom: 'var(--spacing-md)' }}>
              <div style={{ backgroundColor: 'var(--surface-soft)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted-soft)' }}>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 className="title-md">Carton & Packaging Plant</h3>
              <span className="btn-secondary" style={{ height: '28px', padding: '0 12px', fontSize: '12px', borderRadius: 'var(--rounded-xs)' }}>Dhaka</span>
            </div>
            <p className="body-sm" style={{ color: 'var(--muted)' }}>
              A high-precision printing and carton assembly facility catering directly to Bangladesh's RMG (Garments) and pharmaceutical export sectors.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" style={{ backgroundColor: 'var(--surface-soft)' }} id="about">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--spacing-xxl)', alignItems: 'center' }}>
          <div>
            <h2 className="display-lg" style={{ marginBottom: '24px' }}>Rooted in Quality,<br/>Growing with Purpose.</h2>
            <p className="body-md" style={{ marginBottom: '16px', fontSize: '18px' }}>
              Founded in the heart of Bangladesh's industrial zone, Al Noor Paper Mills has grown from a modest operation into one of the country's most advanced paper manufacturing facilities.
            </p>
            <p className="body-md" style={{ marginBottom: '32px', color: 'var(--muted)' }}>
              Our commitment goes beyond just making paper. We are dedicated to sustainable manufacturing processes, minimizing our environmental footprint while maximizing the quality of every sheet that leaves our factory.
            </p>
            <button className="btn-primary">Learn More About Us</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-lg)' }}>
             <div className="feature-card card-gray" style={{ padding: 'var(--spacing-lg)' }}>
               <h3 className="title-md" style={{ marginBottom: '8px' }}>Eco-Friendly</h3>
               <p className="body-sm" style={{ color: 'var(--muted)' }}>We source our raw materials from certified sustainable forests.</p>
             </div>
             <div className="feature-card card-white" style={{ padding: 'var(--spacing-lg)', marginTop: '40px' }}>
               <h3 className="title-md" style={{ marginBottom: '8px' }}>Advanced Tech</h3>
               <p className="body-sm" style={{ color: 'var(--muted)' }}>Utilizing state-of-the-art machinery for precision and consistency.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Investors & Corporate Governance Section */}
      <section className="container section" id="investors">
        <div style={{ textAlign: 'center', marginBottom: '64px', maxWidth: '700px', margin: '0 auto 64px' }}>
          <h2 className="display-lg" style={{ marginBottom: '16px' }}>Investor Relations</h2>
          <p className="body-md" style={{ color: 'var(--muted)', fontSize: '18px' }}>Providing transparency and trust. Access Al Noor Paper Mills financial statements, corporate governance, and disclosures.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
          <div className="investor-card">
            <h3 className="title-md" style={{ borderBottom: '2px solid var(--primary)', paddingBottom: '12px' }}>Financial Reports</h3>
            <p className="body-sm" style={{ color: 'var(--muted)' }}>Read and download our quarterly and annual financial statements.</p>
            <div className="investor-links">
              <a href="#investors" className="investor-link">
                Annual Report {new Date().getFullYear() - 1} &rarr;
              </a>
              <a href="#investors" className="investor-link">
                Q3 Financial Statement &rarr;
              </a>
              <a href="#investors" className="investor-link">
                Half-Yearly Financials &rarr;
              </a>
            </div>
          </div>

          <div className="investor-card">
            <h3 className="title-md" style={{ borderBottom: '2px solid var(--ink)', paddingBottom: '12px' }}>Corporate Governance</h3>
            <p className="body-sm" style={{ color: 'var(--muted)' }}>Learn about our Board of Directors, policies, and code of conduct.</p>
            <div className="investor-links">
              <a href="#investors" className="investor-link" style={{ color: 'var(--ink)' }}>
                Board of Directors &rarr;
              </a>
              <a href="#investors" className="investor-link" style={{ color: 'var(--ink)' }}>
                Compliance & Disclosures &rarr;
              </a>
              <a href="#investors" className="investor-link" style={{ color: 'var(--ink)' }}>
                Shareholding Pattern &rarr;
              </a>
            </div>
          </div>

          <div className="investor-card" style={{ backgroundColor: 'var(--surface-soft)' }}>
            <h3 className="title-md" style={{ borderBottom: '2px dashed var(--muted-soft)', paddingBottom: '12px' }}>Shareholder Services</h3>
            <p className="body-sm" style={{ color: 'var(--muted)' }}>Contact info and investor complains cells details.</p>
            <div className="investor-links">
              <a href="#investors" className="investor-link">
                Investor Complaints &rarr;
              </a>
              <a href="#investors" className="investor-link">
                General Notices &rarr;
              </a>
              <a href="#investors" className="investor-link">
                IPO Disclosures &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="container section" style={{ textAlign: 'center', padding: '100px 0' }} id="contact">
         <div style={{ backgroundColor: 'var(--surface-soft)', borderRadius: 'var(--rounded-xl)', padding: '80px 40px', maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="display-md" style={{ marginBottom: '16px' }}>Ready to Partner with Us?</h2>
            <p className="body-md" style={{ color: 'var(--muted)', marginBottom: '32px', fontSize: '18px' }}>Get in touch with our team to discuss your paper manufacturing needs and how we can support your business.</p>
            <button className="btn-primary" style={{ padding: '0 40px' }}>Contact Sales Team</button>
         </div>
      </section>
    </main>
  );
}
