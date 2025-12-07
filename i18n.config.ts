import es from './locales/es.json'
import en from './locales/en.json'
import type { I18nOptions } from '@nuxtjs/i18n'

export default {
  legacy: false,
  locale: 'es',
  fallbackLocale: 'es',
  messages: {
    es,
    en
  }
} satisfies I18nOptions

