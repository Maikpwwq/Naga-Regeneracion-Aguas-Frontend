import './assets/main.css'
import 'vuetify/dist/vuetify.min.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import MyGlobalComponent from './components/MyGlobalComponent.vue';

import App from './App.vue'
import router from './router'
// import vuetify from './plugins/vuetify'
// import { loadFonts } from './plugins/webfontloader'
// import axios from'./plugins/axios'

// loadFonts()

const app = createApp(App)
// app.component('MyGlobalComponent', MyGlobalComponent);
app.use(createPinia())
app.use(router)
// app.use(axios)
// app.use(vuetify)
app.mount('#app')
