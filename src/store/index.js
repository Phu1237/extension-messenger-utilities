import { createStore } from 'vuex'
import storage from './storage'

export default createStore({
  modules: {
    storage
  },
  strict: process.env.NODE_ENV !== 'production'
})