
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { T } from '@/components/T';
import { useApp } from '@/contexts/AppContext';

interface Testimonial {
  id: number;
  name: string;
  job: string;
  avatar: string;
  quote: {
    en: string;
    fr: string;
  };
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sophie Dubois',
    job: 'Entrepreneur',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: {
      en: 'Figenn has completely transformed how I manage my investments. The interface is intuitive and the insights are invaluable for making informed decisions.',
      fr: 'Figenn a complètement transformé la façon dont je gère mes investissements. L\'interface est intuitive et les informations sont inestimables pour prendre des décisions éclairées.'
    }
  },
  {
    id: 2,
    name: 'Jean Martin',
    job: 'Financial Advisor',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: {
      en: 'As a financial advisor, I recommend Figenn to all my clients. It provides a comprehensive view of their financial situation across all asset classes.',
      fr: 'En tant que conseiller financier, je recommande Figenn à tous mes clients. Il offre une vue complète de leur situation financière à travers toutes les classes d\'actifs.'
    }
  },
  {
    id: 3,
    name: 'Alexandre Chen',
    job: 'Crypto Investor',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    quote: {
      en: 'The crypto tracking features in Figenn are exceptional. Real-time updates and integrations with all major exchanges make it a must-have tool.',
      fr: 'Les fonctionnalités de suivi des cryptomonnaies dans Figenn sont exceptionnelles. Les mises à jour en temps réel et les intégrations avec toutes les principales plateformes d\'échange en font un outil indispensable.'
    }
  },
  {
    id: 4,
    name: 'Marie Leclerc',
    job: 'Real Estate Investor',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: {
      en: 'Managing my real estate portfolio has never been easier. Figenn helps me track rental income, property values, and overall return on investment in one place.',
      fr: 'Gérer mon portefeuille immobilier n\'a jamais été aussi facile. Figenn m\'aide à suivre les revenus locatifs, les valeurs immobilières et le rendement global de mes investissements en un seul endroit.'
    }
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const { language } = useApp();
  
  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      goToNext();
    } else if (touchStart - touchEnd < -50) {
      // Swipe right
      goToPrevious();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);
  
  return (
    <section id="testimonials" className="py-20 bg-secondary/50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <T id="testimonials_title" />
          </h2>
          <p className="text-lg text-muted-foreground">
            <T id="testimonials_subtitle" />
          </p>
        </div>
        
        <div 
          className="max-w-4xl mx-auto relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="bg-card rounded-xl p-8 md:p-12 shadow-sm border border-border relative">
            <div className="absolute top-8 left-8 md:top-10 md:left-10 text-primary/10">
              <Quote className="h-16 w-16 md:h-24 md:w-24" />
            </div>
            
            <div className="relative z-10">
              <p className="text-lg md:text-xl mb-8 relative z-10">
                {testimonials[activeIndex].quote[language]}
              </p>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[activeIndex].job}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? 'w-8 bg-primary' : 'w-2 bg-primary/30'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="flex justify-between mt-8">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={goToPrevious}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={goToNext}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
