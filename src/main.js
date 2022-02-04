import { createApp } from 'vue'
import App from './App.vue'
// Vue core
import router from './router'
// Plugins
import FontAwesomeIcon from './plugins/fontawesome'

const app = createApp(App)

// Vue core
app.use(router)
// FontAwesome
app.component('FontAwesomeIcon', FontAwesomeIcon)
// Mount app
app.mount('#app')
