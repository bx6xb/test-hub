import { initReactI18next } from 'react-i18next'

import i18nModule from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpBackend from 'i18next-http-backend'

i18nModule
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ['en', 'ru'],
  })

export const i18n = i18nModule
