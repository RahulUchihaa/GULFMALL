import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
// Import the TypeScript types
import en from './en.json';
import ar from './ar.json';

export const languageResources = {
  en: { translation: en },
  ar: { translation: ar },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: languageResources,
});

export default i18next;
