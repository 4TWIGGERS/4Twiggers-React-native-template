import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from './locales';

i18n.use(initReactI18next).init({
   lng: 'en',
   returnNull: false,
   compatibilityJSON: 'v3',
   fallbackLng: 'en',
   resources: {
      en: { translation: en },
      // add additional resources here
   },
   interpolation: {
      escapeValue: false,
   },
});

i18n.languages = ['en'];

export default i18n;
