export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },
  app: {
    baseURL: '/cv/',
    buildAssetsDir: '/_nuxt/'
  },
  router: {
    base: "/cv/",
  },
  generate: {
    subFolders: true,
  },
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: false,
      ignore: ['/cv-ats', 'cv-ats']
    },
    routeRules: {
      '/cv-ats': { prerender: false },
      'cv-ats': { prerender: false },
      // Optimizar la carga de archivos GLB grandes
      '/cv/robot.glb': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable',
          'Content-Encoding': 'gzip'
        }
      }
    },
    compressPublicAssets: true
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss'
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
