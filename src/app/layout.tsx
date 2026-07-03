import type { Metadata } from 'next';
import './globals.css';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Al Noor Paper Mills | Premium Paper Manufacturing',
  description: 'Leading paper mill company in Bangladesh, delivering premium quality paper products for industrial and commercial use.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body>
        <nav className="top-nav">
          <div className="container top-nav-inner">
            <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 700, fontSize: '20px', color: 'var(--ink)' }}>
              <Image src="/logo_v2.png" alt="Al Noor Logo" width={150} height={48} style={{ objectFit: 'contain', mixBlendMode: 'multiply' }} priority />
              <span>Al-Noor <span style={{ color: 'var(--primary)' }}>Papers</span></span>
            </div>
            <div className="nav-links">
              <a href="#about">About</a>
              <div className="dropdown">
                <a href="#products" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  Products
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </a>
                <div className="dropdown-menu">
                  <a href="#products" className="dropdown-item">Industrial Kraft Paper</a>
                  <a href="#products" className="dropdown-item">Premium Printing Paper</a>
                  <a href="#products" className="dropdown-item">Specialty Grades</a>
                </div>
              </div>
              <div className="dropdown">
                <a href="#units" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  Units
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </a>
                <div className="dropdown-menu">
                  <a href="#units" className="dropdown-item">Unit 1 - Gazipur</a>
                  <a href="#units" className="dropdown-item">Unit 2 - Narayanganj</a>
                  <a href="#units" className="dropdown-item">Carton & Packaging Plant</a>
                </div>
              </div>
              <div className="dropdown">
                <a href="#investors" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  Investors
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </a>
                <div className="dropdown-menu">
                  <a href="#investors" className="dropdown-item">Financial Statements</a>
                  <a href="#investors" className="dropdown-item">Annual Reports</a>
                  <a href="#investors" className="dropdown-item">Corporate Governance</a>
                </div>
              </div>
              <a href="#contact" className="btn-primary" style={{ padding: '8px 20px', height: '40px', fontSize: '14px', color: 'var(--on-primary)' }}>Contact Us</a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 700, fontSize: '18px', marginBottom: '16px', color: 'var(--ink)' }}>
                <Image src="/logo_v2.png" alt="Al Noor Logo" width={150} height={48} style={{ objectFit: 'contain', mixBlendMode: 'multiply' }} />
                <span>Al-Noor <span style={{ color: 'var(--primary)' }}>Papers</span></span>
              </div>
              <p style={{ color: 'var(--muted)' }}>Premium paper manufacturing in Bangladesh.</p>
            </div>
            <div>
              <h4 style={{ marginBottom: '16px', color: 'var(--ink)' }}>Products</h4>
              <p style={{ marginBottom: '8px' }}>Industrial Kraft Paper</p>
              <p style={{ marginBottom: '8px' }}>Printing Paper</p>
              <p>Specialty Grades</p>
            </div>
            <div>
              <h4 style={{ marginBottom: '16px', color: 'var(--ink)' }}>Company</h4>
              <p style={{ marginBottom: '8px' }}>About Us</p>
              <p style={{ marginBottom: '8px' }}>Sustainability</p>
              <p>Careers</p>
            </div>
            <div>
              <h4 style={{ marginBottom: '16px', color: 'var(--ink)' }}>Contact</h4>
              <p style={{ marginBottom: '8px' }}>Dhaka, Bangladesh</p>
              <p style={{ marginBottom: '8px' }}>info@alnoorpaper.com</p>
              <p>+880 123 456 7890</p>
            </div>
          </div>
          <div className="container" style={{ marginTop: '64px', paddingTop: '32px', borderTop: '1px solid var(--hairline)', textAlign: 'center', fontSize: '14px', color: 'var(--muted-soft)' }}>
            &copy; {new Date().getFullYear()} Al Noor Paper Mills. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
