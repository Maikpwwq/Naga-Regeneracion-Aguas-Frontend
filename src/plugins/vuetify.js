// Styles
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import 'vuetify/styles'

// Vuetify
import { defaults as vuetifyDefaults, createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  defaults: { 
    vuetifyDefaults
  },
  // defaults: {VBtn: {
  //   color: 'primary',
  //   variant: 'outlined',
  //   rounded: true
  // }},
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#4f317e',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        anchor: '#8c9eff'
      }
    }
  },
  lang: {
    // locales: { es },
    current: 'es'
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})
