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
  css: [],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/dotenv'],
  env: {},
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
    scss: [],
  },
  build: {},
}
