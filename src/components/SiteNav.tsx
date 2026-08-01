import CardNav from '@/components/CardNav';
import { cardNavItems } from '@/lib/nav';

export default function SiteNav() {
  return (
    <CardNav
      logo="/logo_v2.png"
      logoAlt="Al-Noor Papers Logo"
      logoHref="/"
      items={cardNavItems}
      baseColor="#f9f9f9"
      menuColor="#0a0a0a"
      ctaLabel="Contact Us"
      ctaHref="/contact"
      ease="power3.out"
    />
  );
}
