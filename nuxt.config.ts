// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    spoonacular: {
      apiKey: '',
    },
  },

  $development: {
    nitro: {
      storage: {
        recipes: {
          driver: 'fs',
          base: 'recipes'
        }
      }
    }
  },

  image: {
    providers: {
      spoonacular: {
        provider: '~/providers/spoonacular',
      },
    },
  },

  alias: {
    '@': resolve(__dirname, '/'),
  },

  css: ['~/assets/main.scss'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxt/ui', '@nuxt/image'],
})