
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Assets } from '@/components/Assets';
import { Pricing } from '@/components/Pricing';
import { Testimonials } from '@/components/Testimonials';
import { LogoBanner } from '@/components/LogoBanner';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <LogoBanner />
        <Assets />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
