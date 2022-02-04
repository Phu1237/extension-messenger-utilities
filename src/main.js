import { createApp } from 'vue'
import App from './App.vue'
// Vue core
import router from './router'
import store from './store'
// Plugins
import FontAwesomeIcon from './plugins/fontawesome'

const app = createApp(App)

// Vue core
app.use(router)
app.use(store)
// FontAwesome
app.component('FontAwesomeIcon', FontAwesomeIcon)
// Mount app
app.mount('#app')
