import process from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    'nuxt-vitest',
    '@nuxtjs/storybook',
  ],

  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
      API_RESTCOUNTRIES_URL: process.env.API_RESTCOUNTRIES_URL,
      UNSPLASH_ACCESS_KEY: process.env.UNSPLASH_ACCESS_KEY,
    },
  },

  css: [
    '@unocss/reset/tailwind.css',
    'animate.css',
  ],

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Nuxt.js project' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  devtools: { enabled: true },
})
