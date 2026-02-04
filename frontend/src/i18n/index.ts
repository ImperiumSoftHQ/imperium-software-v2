import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import bg from './locales/bg.json'

const resources = {
  en: {
    translation: en,
  },
  bg: {
    translation: bg,
  },
}

const storedLanguage = localStorage.getItem('i18nextLng') || 'en'

i18n.use(initReactI18next).init({
  resources,
  lng: storedLanguage,
  fallbackLng: 'en',
  defaultNS: 'translation',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
})

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('i18nextLng', lng)
})

export default i18n
