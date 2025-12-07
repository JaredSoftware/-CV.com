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
  modules: [],
  plugins: ["~/plugins/flowbite.client.ts"],
});
