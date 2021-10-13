
import { defineNuxtPlugin } from '#app'
import ElementPlus from 'element-plus'

export default defineNuxtPlugin((nuxtApp) => {
  // nuxtApp.provide('hello', (msg) => `Hello ${msg}!`);
  nuxtApp.use(ElementPlus)
})
