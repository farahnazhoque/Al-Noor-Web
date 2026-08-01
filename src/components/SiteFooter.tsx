import Image from 'next/image';
import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo logo--footer">
            <Image src="/logo_v2.png" alt="Al-Noor Logo" width={48} height={48} className="logo-mark" />
            <span>Al-Noor <span className="logo-accent">Papers</span></span>
          </div>
          <p style={{ color: 'var(--muted)' }}>A sister concern of Al-Noor Group of Industries, with paper and board manufacturing in Bangladesh since 2010.</p>
        </div>
        <div>
          <h4>Products</h4>
          <p><Link href="/products/white-printing-paper">White Printing Paper</Link></p>
          <p><Link href="/products/news-printing-paper">News Printing Paper</Link></p>
          <p><Link href="/products">View Full Catalog</Link></p>
        </div>
        <div>
          <h4>Company</h4>
          <p><Link href="/about">About the Group</Link></p>
          <p><Link href="/history">Our History</Link></p>
          <p><Link href="/corporate">Mission &amp; Leadership</Link></p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>5/1, Fench Road, Nayabazar</p>
          <p>Dhaka-1100, Bangladesh</p>
          <p>Factory: Kanchpur, Sonargaon, Narayanganj</p>
        </div>
      </div>
      <div className="container footer-copyright">
        {`© ${new Date().getFullYear()} Al-Noor Paper & Board Mills Ltd. All rights reserved.`}
      </div>
    </footer>
  );
}
