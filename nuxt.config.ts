import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  meta: {
    title: 'ElementPlus + Nuxt3',
  },
  buildModules: [
    '@vueuse/core/nuxt',
    '@pinia/nuxt',
  ],
  css: [
    'assets/scss/index.scss'
  ],
  components: [
    '~/components/',
    // {
    //   path: 'node_modules/element-plus/lib/components/*/index.js',
    // }
  ],
  vite: {
    logLevel: 'info',
  },
})
