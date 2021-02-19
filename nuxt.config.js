require('dotenv').config()
const { PLEROMA_URL } = process.env

export default {
  srcDir: './src',
  head: {
    title: 'alliumFE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'AlliumFE is frontend application for Pleroma.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['~/assets/css/destyle.css', '~/assets/scss/style.scss'],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/dotenv'],
  env: { PLEROMA_URL },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-fontawesome',
    '@nuxtjs/style-resources',
  ],
  axios: {},
  pwa: {
    manifest: {
      lang: 'ja',
    },
  },
  fontawesome: {
    component: 'fa',
  },
  styleResources: {
    scss: ['~/assets/scss/var.scss', '~/assets/scss/mixin.scss'],
  },
  build: {},
  router: {
    middleware: 'route',
  },
}
