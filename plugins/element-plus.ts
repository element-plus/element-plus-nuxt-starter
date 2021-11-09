import { defineNuxtPlugin } from '#app'
// if you do not want to import all, comment this
import ElementPlus from 'element-plus/lib'

// we are explore import components on demand, but @nuxt/components seem not support components/ComponentA/index.js
// https://github.com/nuxt/components#library-authors

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ElementPlus)
})
