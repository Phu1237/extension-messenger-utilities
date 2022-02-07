import configs from '@/core/configs'

export default {
  namespaced: true,
  state: () => ({
    sync: {},
    local: {},
  }),
  mutations: {
    setStorage(state, payload) {
      switch (payload.storage) {
        case 'sync':
          state.sync = payload.data
          break
        case 'local':
          state.local = payload.data
          break
      }
    },
  },
  actions: {
    /**
     * Fetch data from the chrome storage
     */
    async fetch({ commit, dispatch }) {
      await dispatch('get', { storage: 'sync' }).then((result) => {
        let data = configs.merge(result)
        commit('setStorage', { storage: 'sync', data: data })
      })
      await dispatch('get', { storage: 'local' }).then((result) => {
        commit('setStorage', { storage: 'local', data: result })
      })
      return
    },
    /**
     * Get data from the chrome storage
     * @param {*} param0
     * @param {*} payload
     */
    get(_, payload) {
      return new Promise((resolve) => {
        switch (payload.storage) {
          case 'sync':
            chrome.storage.sync.get(null, (result) => {
              resolve(result)
            })
            break
          case 'local':
            chrome.storage.local.get(null, (result) => {
              resolve(result)
            })
            break
        }
      })
    },
    /**
     * Set data to the chrome storage
     * @param {Object} payload
     */
    set(_, payload) {
      switch (payload.storage) {
        case 'sync':
          chrome.storage.sync.set(payload.data)
          break
        case 'local':
          chrome.storage.local.set(payload.data)
          break
      }
    },
  },
}
