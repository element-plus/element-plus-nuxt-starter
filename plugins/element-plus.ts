import { defineNuxtPlugin } from '#app'
import * as ElementPlus from 'element-plus/lib'

export default defineNuxtPlugin((nuxtApp: { vueApp: { use: (arg0: typeof ElementPlus) => void } }) => {
    nuxtApp.vueApp.use(ElementPlus)
})
