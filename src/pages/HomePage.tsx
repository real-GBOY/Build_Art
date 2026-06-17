import { CTASection } from '../components/CTASection';
import { DreamSection } from '../components/DreamSection';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { NewsletterSection } from '../components/NewsletterSection';
import { Services } from '../components/Services';
import { StepsSection } from '../components/StepsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';

export function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 lg:pt-[88px]">
        <Hero />
        <Services />
        <DreamSection />
        <StepsSection />
        <TestimonialsSection />
        <CTASection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
