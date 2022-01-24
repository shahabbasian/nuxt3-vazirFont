import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/vazir-font.css'
  ],
  buildModules: [
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        }
      }
    }
  }
})
