// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {enabled: true},
  modules: ['@nuxtjs/strapi'],
  strapi:{
    version: 'v4',
  },
  runtimeConfig: {
    strapi: {
      url: 'http://localhost:1337',
    },
    public: {
      strapi: {
        url: 'http://localhost:1337',
      },
    },
  },
});
