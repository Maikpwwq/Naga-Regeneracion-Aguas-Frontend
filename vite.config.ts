import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import Components from 'unplugin-vue-components/vite'
// import { VuetifyResolver } from 'unplugin-vue-components/resolvers';
// import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag: string) => {
            return tag.startsWith('v-')
          }
        }
      }
    }),
    vueJsx()
    // vuetify()
    // Components({
    //   /* options */
    //   resolvers: [
    //     VuetifyResolver(),
    //   ],
    // }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
