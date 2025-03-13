
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language } from '@/lib/i18n';
import { useToast } from '@/components/ui/use-toast';

type ThemeType = 'light' | 'dark';

interface AppContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: ThemeType;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');
  const [theme, setTheme] = useState<ThemeType>('light');
  const { toast } = useToast();
  
  useEffect(() => {
    // Check if we have language in localStorage
    const savedLanguage = localStorage.getItem('figenn-language') as Language | null;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
      setLanguage(savedLanguage);
    } else {
      // Default to browser language
      const browserLang = navigator.language.split('-')[0];
      setLanguage(browserLang === 'fr' ? 'fr' : 'en');
    }
    
    // Check if we have theme in localStorage
    const savedTheme = localStorage.getItem('figenn-theme') as ThemeType | null;
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Default to system preference
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(isDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', isDark);
    }
  }, []);
  
  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('figenn-language', lang);
    toast({
      title: lang === 'fr' ? 'Langue modifiée' : 'Language changed',
      description: lang === 'fr' ? 'Français est maintenant activé' : 'English is now active',
      duration: 2000,
    });
  };
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('figenn-theme', newTheme);
  };
  
  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage: changeLanguage,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
