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
    async asyncFetch({ commit, dispatch }) {
      await dispatch('fetch', { storage: 'sync' }).then((result) => {
        let data = configs.merge(result)
        commit('setStorage', { storage: 'sync', data: data })
      })
      await dispatch('fetch', { storage: 'local' }).then((result) => {
        commit('setStorage', { storage: 'local', data: result })
      })
      return
    },
    /**
     * Get data from the chrome storage
     * @param {*} param0
     * @param {*} payload
     */
    fetch(_, payload) {
      return new Promise((resolve, reject) => {
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
          default:
            reject('Storage type not found')
        }
      })
    },
    /**
     * Set data to the chrome storage
     * @param {Object} payload
     */
    set(_, payload) {
      return new Promise((resolve, reject) => {
        switch (payload.storage) {
          case 'sync':
            chrome.storage.sync.set(payload.data)
            resolve(true)
            break
          case 'local':
            chrome.storage.local.set(payload.data)
            resolve(true)
            break
          default:
            reject('Storage type not found')
        }
      })
    },
  },
}
