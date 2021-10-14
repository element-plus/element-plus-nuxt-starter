
import { defineNuxtPlugin } from '#app'
import ElementPlus from 'element-plus/lib'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.app.use(ElementPlus)
})
