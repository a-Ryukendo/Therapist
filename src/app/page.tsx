import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FeesSection from '@/components/FeesSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <FeesSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
