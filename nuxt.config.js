export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'crynuxt2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    extendRoutes(routes) {
      routes.forEach((route) => {
        // When options.generate.subFolders is true (default)
        const alias =
          route.path.length > 1 ? `${route.path}/index.html` : '/index.html'
        // When options.generate.subFolders is false
        // const normalizedRoute = route.path.replace(/\/$/, '') // Remove trailing slashes if they exist
        // const alias =
        //   route.path.length > 1 ? `${normalizedRoute}.html` : '/index.html'
        route.alias = alias
      })
    }
  },
  generate: {
    subFolders: true // Configura generate.subFolders según tus preferencias
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
