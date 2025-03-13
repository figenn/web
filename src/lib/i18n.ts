
type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  en: {
    // Header
    "login": "Login",
    "signup": "Sign Up",
    "features": "Features",
    "pricing": "Pricing",
    "testimonials": "Testimonials",
    "assets": "Assets",
    
    // Hero Section
    "hero_title": "Manage all your financial assets in one place",
    "hero_subtitle": "Figenn helps you track and manage your investments across stocks, crypto, real estate, and more with a modern and intuitive interface.",
    "get_started": "Get Started",
    "learn_more": "Learn More",
    
    // Assets Section
    "assets_title": "All your assets in one platform",
    "assets_subtitle": "Track and manage your entire portfolio with ease",
    "stocks": "Stocks & Funds",
    "real_estate": "Real Estate",
    "crypto": "Cryptocurrencies",
    "savings": "Savings Accounts",
    "startups": "Startups",
    "crowdlending": "Crowdlending",
    "exotic": "Exotic Assets",
    "stocks_desc": "Track your stock portfolio, dividends, and performance over time.",
    "real_estate_desc": "Manage your properties, rental income, and property value changes.",
    "crypto_desc": "Monitor your crypto assets across different wallets and exchanges.",
    "savings_desc": "Keep track of your savings accounts, interest rates, and growth.",
    "startups_desc": "Track your startup investments and their valuations.",
    "crowdlending_desc": "Monitor your peer-to-peer lending investments and returns.",
    "exotic_desc": "Manage collectibles, art, wines, or any other alternative investments.",
    
    // Pricing Section
    "pricing_title": "Choose the plan that fits your needs",
    "pricing_subtitle": "All plans include a 14-day free trial",
    "free": "Free",
    "premium": "Premium",
    "pro": "Professional",
    "mo": "/ month",
    "yr": "/ year",
    "free_price": "€0",
    "premium_price_mo": "€9.99",
    "premium_price_yr": "€99.99",
    "pro_price_mo": "€19.99",
    "pro_price_yr": "€199.99",
    "free_desc": "Perfect for beginners",
    "premium_desc": "Ideal for active investors",
    "pro_desc": "For professionals and advisors",
    "basic_features": "Basic features",
    "premium_features": "All Free features, plus:",
    "pro_features": "All Premium features, plus:",
    "up_to_assets": "Up to 15 assets",
    "unlimited_assets": "Unlimited assets",
    "basic_analytics": "Basic analytics",
    "advanced_analytics": "Advanced analytics",
    "portfolio_insights": "Portfolio insights",
    "api_access": "API access",
    "csv_export": "CSV export",
    "excel_export": "Excel & PDF export",
    "email_alerts": "Email alerts",
    "real_time_alerts": "Real-time alerts",
    "multi_currency": "Multi-currency support",
    "team_members": "Up to 3 team members",
    "white_label": "White-label options",
    "dedicated_support": "Dedicated support",
    "choose_plan": "Choose Plan",
    "current_plan": "Current Plan",
    "monthly": "Monthly",
    "yearly": "Yearly",
    "save_with_yearly": "Save with yearly billing",
    
    // Testimonials
    "testimonials_title": "What our users say",
    "testimonials_subtitle": "Trusted by thousands of investors worldwide",
    
    // Logos Section
    "trusted_by": "Trusted by",
    
    // Footer
    "product": "Product",
    "company": "Company",
    "support": "Support",
    "legal": "Legal",
    "privacy": "Privacy Policy",
    "terms": "Terms of Service",
    "contact": "Contact",
    "blog": "Blog",
    "about": "About Us",
    "careers": "Careers",
    "help": "Help Center",
    "status": "Status",
    "faq": "FAQ",
    "all_rights": "All rights reserved",
  },
  fr: {
    // Header
    "login": "Connexion",
    "signup": "S'inscrire",
    "features": "Fonctionnalités",
    "pricing": "Tarifs",
    "testimonials": "Témoignages",
    "assets": "Actifs",
    
    // Hero Section
    "hero_title": "Gérez tous vos actifs financiers en un seul endroit",
    "hero_subtitle": "Figenn vous aide à suivre et gérer vos investissements en actions, crypto, immobilier et plus encore avec une interface moderne et intuitive.",
    "get_started": "Commencer",
    "learn_more": "En savoir plus",
    
    // Assets Section
    "assets_title": "Tous vos actifs sur une seule plateforme",
    "assets_subtitle": "Suivez et gérez l'intégralité de votre portefeuille en toute simplicité",
    "stocks": "Actions & fonds",
    "real_estate": "Immobilier",
    "crypto": "Cryptomonnaies",
    "savings": "Comptes d'épargne",
    "startups": "Startups",
    "crowdlending": "Crowdlending",
    "exotic": "Actifs exotiques",
    "stocks_desc": "Suivez votre portefeuille d'actions, vos dividendes et votre performance dans le temps.",
    "real_estate_desc": "Gérez vos propriétés, revenus locatifs et variations de valeur immobilière.",
    "crypto_desc": "Surveillez vos actifs crypto à travers différents portefeuilles et échanges.",
    "savings_desc": "Suivez vos comptes d'épargne, taux d'intérêt et croissance.",
    "startups_desc": "Suivez vos investissements dans les startups et leurs valorisations.",
    "crowdlending_desc": "Surveillez vos investissements de prêt entre particuliers et leurs rendements.",
    "exotic_desc": "Gérez les objets de collection, l'art, les vins ou tout autre investissement alternatif.",
    
    // Pricing Section
    "pricing_title": "Choisissez le plan qui correspond à vos besoins",
    "pricing_subtitle": "Tous les plans incluent un essai gratuit de 14 jours",
    "free": "Gratuit",
    "premium": "Premium",
    "pro": "Professionnel",
    "mo": "/ mois",
    "yr": "/ an",
    "free_price": "0 €",
    "premium_price_mo": "9,99 €",
    "premium_price_yr": "99,99 €",
    "pro_price_mo": "19,99 €",
    "pro_price_yr": "199,99 €",
    "free_desc": "Parfait pour les débutants",
    "premium_desc": "Idéal pour les investisseurs actifs",
    "pro_desc": "Pour les professionnels et conseillers",
    "basic_features": "Fonctionnalités de base",
    "premium_features": "Toutes les fonctionnalités gratuites, plus :",
    "pro_features": "Toutes les fonctionnalités Premium, plus :",
    "up_to_assets": "Jusqu'à 15 actifs",
    "unlimited_assets": "Actifs illimités",
    "basic_analytics": "Analyses de base",
    "advanced_analytics": "Analyses avancées",
    "portfolio_insights": "Aperçus du portefeuille",
    "api_access": "Accès API",
    "csv_export": "Exportation CSV",
    "excel_export": "Exportation Excel et PDF",
    "email_alerts": "Alertes par e-mail",
    "real_time_alerts": "Alertes en temps réel",
    "multi_currency": "Support multi-devises",
    "team_members": "Jusqu'à 3 membres d'équipe",
    "white_label": "Options de marque blanche",
    "dedicated_support": "Support dédié",
    "choose_plan": "Choisir ce plan",
    "current_plan": "Plan actuel",
    "monthly": "Mensuel",
    "yearly": "Annuel",
    "save_with_yearly": "Économisez avec la facturation annuelle",
    
    // Testimonials
    "testimonials_title": "Ce que disent nos utilisateurs",
    "testimonials_subtitle": "Approuvé par des milliers d'investisseurs dans le monde entier",
    
    // Logos Section
    "trusted_by": "Ils nous font confiance",
    
    // Footer
    "product": "Produit",
    "company": "Entreprise",
    "support": "Support",
    "legal": "Légal",
    "privacy": "Politique de confidentialité",
    "terms": "Conditions d'utilisation",
    "contact": "Contact",
    "blog": "Blog",
    "about": "À propos de nous",
    "careers": "Carrières",
    "help": "Centre d'aide",
    "status": "Statut",
    "faq": "FAQ",
    "all_rights": "Tous droits réservés",
  }
};

export type Language = 'en' | 'fr';

export const getTranslation = (
  language: Language,
  key: string,
  fallback: string = ''
): string => {
  if (!translations[language]) return fallback || key;
  return translations[language][key] || fallback || key;
};

export const languages = {
  en: 'English',
  fr: 'Français',
};
