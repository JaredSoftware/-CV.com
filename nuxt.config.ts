// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias:{
    assets:"/<rooDir>/public/assets"
  },
  css:[
    // Load a Node.js module directly (here it's a Sass file)
    'bulma',
    // CSS file in the project
    '~/css/bulma/bulma.css',
     // SCSS file in the project
    '~/css/bulma/bulma.scss'
  ]
})
