// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  devServer: {
    port: 3030
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      title: 'Andrew Collins',
      meta: [
        { name: 'description', content: 'A passionate software developer founded on diverse collaboration, innovation, and forever learning. Creating creative projects to make a positive social impact.' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    },
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