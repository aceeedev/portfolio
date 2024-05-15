// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  devServer: {
    port: 3030
  },

  css: ['~/assets/styles.css'],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  modules: ["@nuxt/image"]
})