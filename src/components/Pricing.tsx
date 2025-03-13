
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Check } from 'lucide-react';
import { T } from '@/components/T';
import { useApp } from '@/contexts/AppContext';

export const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const { language } = useApp();
  
  const toggleBillingPeriod = () => {
    setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly');
  };
  
  return (
    <section id="pricing" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <T id="pricing_title" />
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            <T id="pricing_subtitle" />
          </p>
          
          <div className="flex items-center justify-center space-x-3 mb-8">
            <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-foreground' : 'text-muted-foreground'}`}>
              <T id="monthly" />
            </span>
            <Switch
              checked={billingPeriod === 'yearly'}
              onCheckedChange={toggleBillingPeriod}
            />
            <span className={`text-sm font-medium ${billingPeriod === 'yearly' ? 'text-foreground' : 'text-muted-foreground'}`}>
              <T id="yearly" />
            </span>
            
            {billingPeriod === 'yearly' && (
              <span className="text-xs font-medium text-green-500 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
                -17%
              </span>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-card border border-border rounded-xl p-8 transition-all hover:shadow-md">
            <h3 className="text-2xl font-bold mb-2">
              <T id="free" />
            </h3>
            <p className="text-muted-foreground mb-4">
              <T id="free_desc" />
            </p>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold">
                <T id="free_price" />
              </span>
              <span className="text-muted-foreground ml-2">
                <T id={billingPeriod === 'monthly' ? 'mo' : 'yr'} />
              </span>
            </div>
            
            <Button className="w-full mb-8">
              <T id="choose_plan" />
            </Button>
            
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-muted-foreground mb-2 uppercase">
                <T id="basic_features" />
              </h4>
              
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                <span><T id="up_to_assets" /></span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                <span><T id="basic_analytics" /></span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                <span><T id="csv_export" /></span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                <span><T id="email_alerts" /></span>
              </div>
            </div>
          </div>
          
          {/* Premium Plan */}
          <div className="bg-card border-2 border-primary rounded-xl p-8 shadow-lg relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
              Popular
            </div>
            <h3 className="text-2xl font-bold mb-2">
              <T id="premium" />
            </h3>
            <p className="text-muted-foreground mb-4">
              <T id="premium_desc" />
            </p>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold">
                <T id={billingPeriod === 'monthly' ? 'premium_price_mo' : 'premium_price_yr'} />
              </span>
              <span className="text-muted-foreground ml-2">
                <T id={billingPeriod === 'monthly' ? 'mo' : 'yr'} />
              </span>
            </div>
            
            <Button className="w-full mb-8">
              <T id="choose_plan" />
            </Button>
            
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-muted-foreground mb-2 uppercase">
                <T id="premium_features" />
              </h4>
              
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                <span><T id="unlimited_assets" /></span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                <span><T id="advanced_analytics" /></span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                <span><T id="portfolio_insights" /></span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                <span><T id="excel_export" /></span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                <span><T id="real_time_alerts" /></span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                <span><T id="multi_currency" /></span>
              </div>
            </div>
          </div>
          
          {/* Pro Plan */}
          <div className="bg-card border border-border rounded-xl p-8 transition-all hover:shadow-md">
            <h3 className="text-2xl font-bold mb-2">
              <T id="pro" />
            </h3>
            <p className="text-muted-foreground mb-4">
              <T id="pro_desc" />
            </p>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold">
                <T id={billingPeriod === 'monthly' ? 'pro_price_mo' : 'pro_price_yr'} />
              </span>
              <span className="text-muted-foreground ml-2">
                <T id={billingPeriod === 'monthly' ? 'mo' : 'yr'} />
              </span>
            </div>
            
            <Button className="w-full mb-8">
              <T id="choose_plan" />
            </Button>
            
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-muted-foreground mb-2 uppercase">
                <T id="pro_features" />
              </h4>
              
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                <span><T id="api_access" /></span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                <span><T id="team_members" /></span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                <span><T id="white_label" /></span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                <span><T id="dedicated_support" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
