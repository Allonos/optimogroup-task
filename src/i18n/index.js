import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ka from '../../public/locales/ka.json';
import en from '../../public/locales/en.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ka: { translation: ka },
  },
  lng: localStorage.getItem('language') || 'ka',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
