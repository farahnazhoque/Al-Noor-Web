'use client';

import StarBorderButton from '@/components/StarBorderButton';
import { FloatingPathsBackground } from '@/components/ui/floating-paths';

export default function ContactSection() {
  return (
    <FloatingPathsBackground position={-1} className="contact-paths">
      <section className="container contact-hero">
        <div className="hero-content hero-content-glass contact-hero__copy">
          <span className="eyebrow page-header-eyebrow">Get in Touch</span>
          <h1 className="display-lg">Contact Al-Noor Paper &amp; Board Mills Ltd.</h1>
          <p className="body-lg hero-lead">
            Reach our head office in Dhaka or our manufacturing facility in Kanchpur, Sonargaon, Narayanganj.
            Our sales and technical teams respond to catalog inquiries, custom roll specifications, and export orders.
          </p>
        </div>

        <div className="contact-card hero-content-glass">
          <h2 className="title-md contact-card__heading">Head Office</h2>
          <p className="body-md contact-card__address">
            5/1, Fench Road, Nayabazar, Dhaka-1100, Bangladesh
          </p>

          <h2 className="title-md contact-card__heading">Factory</h2>
          <p className="body-md contact-card__address contact-card__address--last">
            Kanchpur, Sonargaon, Narayanganj, Bangladesh
          </p>

          <StarBorderButton href="mailto:info@alnoorpaper.com" className="contact-card__cta">
            Contact Our Team
          </StarBorderButton>
        </div>
      </section>
    </FloatingPathsBackground>
  );
}
