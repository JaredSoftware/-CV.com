// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  router: {
    base: '/dist/'
  },
  generate: {
    subFolders: true  
  },
})
