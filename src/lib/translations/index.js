import i18n from 'sveltekit-i18n';
import lang from './langs.json';

/** @type {import('sveltekit-i18n').Config} */
const config = ({
  translations: {
    en: { lang },
    ko: { lang },
  },
  loaders: [
    {
      locale: 'en',
      key: 'index',
      loader: async () => (
        await import('./en/index.json')
      ).default,
    },
    {
      locale: 'ko',
      key: 'index',
      loader: async () => (
        await import('./ko/index.json')
      ).default,
    },
    {
      locale: 'en',
      key: 'sign-in',
      loader: async () => (
        await import('./en/sign-in.json')
      ).default,
    },
    {
      locale: 'ko',
      key: 'sign-in',
      loader: async () => (
        await import('./ko/sign-in.json')
      ).default,
    },
  ],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);