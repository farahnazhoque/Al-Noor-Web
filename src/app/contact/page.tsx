import type { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Contact | Al-Noor Paper & Board Mills Ltd.',
  description: 'Contact Al-Noor Paper & Board Mills Ltd. head office in Dhaka and factory in Kanchpur, Sonargaon, Narayanganj.',
};

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
    </main>
  );
}
