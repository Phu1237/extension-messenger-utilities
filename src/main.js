import { createApp } from 'vue'
import App from './App.vue'
// Plugins
import FontAwesomeIcon from './plugins/fontawesome'

const app = createApp(App)

// FontAwesome
app.component('FontAwesomeIcon', FontAwesomeIcon)
// Mount app
app.mount('#app')
