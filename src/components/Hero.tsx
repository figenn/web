
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { T } from '@/components/T';

export const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              <T id="hero_title" />
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <T id="hero_subtitle" />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Button size="lg" className="px-8">
                <T id="get_started" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 gap-2">
                <T id="learn_more" />
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 p-4 rounded-xl border border-border">
              <div className="bg-card rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold">Portfolio Overview</h3>
                    <div className="text-sm text-muted-foreground">Last updated: Today</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-secondary p-4 rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">Total Assets</div>
                      <div className="text-2xl font-bold">€124,500</div>
                    </div>
                    <div className="bg-secondary p-4 rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">Monthly Return</div>
                      <div className="text-2xl font-bold text-green-500">+2.4%</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3">
                          <span className="text-blue-600 dark:text-blue-300 text-xs font-bold">S</span>
                        </div>
                        <div>
                          <div className="font-medium">Stocks</div>
                          <div className="text-xs text-muted-foreground">10 assets</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">€45,200</div>
                        <div className="text-xs text-green-500">+1.2%</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-3">
                          <span className="text-purple-600 dark:text-purple-300 text-xs font-bold">C</span>
                        </div>
                        <div>
                          <div className="font-medium">Crypto</div>
                          <div className="text-xs text-muted-foreground">5 assets</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">€28,750</div>
                        <div className="text-xs text-green-500">+3.8%</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mr-3">
                          <span className="text-amber-600 dark:text-amber-300 text-xs font-bold">R</span>
                        </div>
                        <div>
                          <div className="font-medium">Real Estate</div>
                          <div className="text-xs text-muted-foreground">2 assets</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">€50,550</div>
                        <div className="text-xs text-green-500">+0.5%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
