export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },
  router: {
    base: "/dist/",
  },
  generate: {
    subFolders: true,
  },
  modules: [
    '@nuxtjs/i18n'
  ],
  plugins: ["~/plugins/flowbite.client.ts"],
  i18n: {
    locales: [
      {
        code: 'es',
        iso: 'es-CO',
        name: 'Español',
        file: 'es.json'
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json'
      }
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'es',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false
    }
  }
});
