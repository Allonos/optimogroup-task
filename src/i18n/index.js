import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ka from '../locales/ka.json';
import en from '../locales/en.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ka: { translation: ka },
  },
  lng: localStorage.getItem('language') || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
