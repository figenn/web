
import { useApp } from '@/contexts/AppContext';
import { getTranslation } from '@/lib/i18n';

interface TProps {
  id: string;
  fallback?: string;
}

export const T: React.FC<TProps> = ({ id, fallback }) => {
  const { language } = useApp();
  
  return <>{getTranslation(language, id, fallback)}</>;
};

export const t = (
  id: string,
  language: 'en' | 'fr',
  fallback?: string
): string => {
  return getTranslation(language, id, fallback);
};
