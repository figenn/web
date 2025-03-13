
import { T } from '@/components/T';

export const LogoBanner = () => {
  // In a real application, we would use actual logo images
  const logos = [
    { id: 1, name: 'Company A' },
    { id: 2, name: 'Company B' },
    { id: 3, name: 'Company C' },
    { id: 4, name: 'Company D' },
    { id: 5, name: 'Company E' },
    { id: 6, name: 'Company F' },
    { id: 7, name: 'Company G' },
    { id: 8, name: 'Company H' },
  ];
  
  return (
    <section className="py-10 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-xl font-medium text-muted-foreground">
            <T id="trusted_by" />
          </h3>
        </div>
        
        <div className="relative">
          <div className="flex space-x-12 animate-marquee">
            {logos.concat(logos).map((logo, index) => (
              <div 
                key={`${logo.id}-${index}`} 
                className="flex items-center justify-center min-w-[120px] h-12 text-muted-foreground/70"
              >
                <div className="font-semibold">{logo.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
