import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import zhTW from './locales/zh-TW/translation.json';
import th from './locales/th/translation.json';
import ja from './locales/ja/translation.json';
import fr from './locales/fr/translation.json';
import es from './locales/es/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      'zh-TW': { translation: zhTW },
      th: { translation: th },
      ja: { translation: ja },
      fr: { translation: fr },
      es: { translation: es },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;