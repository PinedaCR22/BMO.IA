import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import headerES from './locales/es/header.json';
import cardsES from './locales/es/cards.json';
import sliderES from './locales/es/slider.json';
import aportesES from './locales/es/aportes.json';
import historiaES from './locales/es/historia.json';
import beneficiosES from './locales/es/beneficios.json';
import chatES from './locales/es/chat.json';
import footerES from './locales/es/footer.json';

import headerEN from './locales/en/header.json';
import cardsEN from './locales/en/cards.json';
import sliderEN from './locales/en/slider.json';
import aportesEN from './locales/en/aportes.json';
import historiaEN from './locales/en/historia.json';
import beneficiosEN from './locales/en/beneficios.json';
import chatEN from './locales/en/chat.json';
import footerEN from './locales/en/footer.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        header: headerES,
        cards: cardsES,
          slider: sliderES,
          aportes: aportesES,
          historia: historiaES,
          beneficios: beneficiosES,
          chat: chatES,
          footer: footerES
      },
      en: {
        header: headerEN,
        cards: cardsEN,
        slider: sliderEN,
        aportes: aportesEN,
        historia: historiaEN,
        beneficios: beneficiosEN,
        chat: chatEN,
        footer: footerEN
      }
    },
    fallbackLng: 'es',
    ns: ['header', 'cards', 'slider', 'historia',  'beneficios', 'chat', 'common', 'footer', 'aportes'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;