import { createApp } from 'vue'
import App from './App.vue'
// Vue core
import router from './router'
import store from './store'
import mixins from './mixins'
// Plugins
import FontAwesomeIcon from './plugins/fontawesome'

const app = createApp(App)

// Vue core
app.mixin(mixins)
app.use(router)
app.use(store)
// FontAwesome
app.component('FontAwesomeIcon', FontAwesomeIcon)
// Mount app
app.mount('#app')
