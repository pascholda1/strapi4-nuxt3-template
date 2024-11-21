// https://nuxt.com/docs/api/configuration/nuxt-config
const strapiUrl = process.env.NODE_ENV === 'production'
                  ? 'https://mein-leben-admin.paschold.dev'
                  : 'http://localhost:1337';
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {enabled: true},
  modules: [
    '@nuxtjs/strapi',
    '@vesp/nuxt-fontawesome',
  ],
  app: {
    baseURL: '/', // Basis-URL für deine App
  },
  strapi: {
    version: 'v4',
  },
  css: ['@/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/_vue.scss";',
        },
      },
    },
  },
  runtimeConfig: {
    strapi: {
      url: strapiUrl,
    },
    public: {
      strapi: {
        url: strapiUrl,
      },
    },
  },
});
