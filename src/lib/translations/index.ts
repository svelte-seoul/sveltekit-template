import i18n, { type Config } from 'sveltekit-i18n';
import lang from './langs.json';

const config: Config = {
  initLocale: 'en',
  translations: {
    en: {lang},
    ko: {lang},
  },
  loaders: [
    {
      locale: 'en',
      key: 'index',
      loader: async () => (await import('./en/index.json')).default,
    },
    {
      locale: 'ko',
      key: 'index',
      loader: async () => (await import('./ko/index.json')).default,
    },
    {
      locale: 'en',
      key: 'sign-in',
      loader: async () => (await import('./en/sign-in.json')).default,
    },
    {
      locale: 'ko',
      key: 'sign-in',
      loader: async () => (await import('./ko/sign-in.json')).default,
    },
  ],
};

export const {t, locale, locales, loading, loadTranslations} = new i18n<[Record<string, unknown>?, Record<string, unknown>?]>(config);