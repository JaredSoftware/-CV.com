export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },
  router: {
    base: "/cv/",
  },
  generate: {
    subFolders: true,
  },
  nitro: {
    prerender: {
      routes: ['/']
    }
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
        name: 'Español'
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English'
      }
    ],
    lazy: false,
    defaultLocale: 'es',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false
    },
    compilation: {
      strictMessage: false,
      jit: false
    },
    vueI18n: './i18n.config.ts'
  }
});
