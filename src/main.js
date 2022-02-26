import { createApp } from 'vue'
import App from './App.vue'
// Vue core
import router from './router'
import store from './store'
import mixins from './mixins'
// Plugins
import FontAwesomeIcon from './plugins/fontawesome'
import VueToast from './plugins/vue-toast-notification'

const app = createApp(App)

// Vue core
app.mixin(mixins)
app.use(router)
app.use(store)
// Plugins
app.use(VueToast, {
  position: 'top-right',
})
app.component('FontAwesomeIcon', FontAwesomeIcon)
// Mount app
app.mount('#app')
