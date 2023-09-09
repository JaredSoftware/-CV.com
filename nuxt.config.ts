// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  generate: {
    routes: ['/']
  },
  components: [
    // ~/calendar-module/components/event/Update.vue => <EventUpdate />
    //{ path: '~/calendar-module/components' },
    '~/components'
  ],
  devtools: { enabled: true },
  css:[
    // Load a Node.js module directly (here it's a Sass file)
    'bulma',
    // CSS file in the project
    '~/css/bulma/bulma.css',
     // SCSS file in the project
    '~/css/bulma/bulma.scss'
  ],
})
