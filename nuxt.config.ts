export default defineNuxtConfig({
  devtools: { enabled: true },
  router: {
    base: "/dist/",
  },
  generate: {
    subFolders: true,
  },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "~/assets/css/input.css",
  },
  plugins: ["~/plugins/flowbite.client.ts"],
});
