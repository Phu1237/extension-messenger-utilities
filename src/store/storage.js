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
    fetch({ commit, dispatch }) {
      return new Promise((resolve) => {
        dispatch('get', { storage: 'sync' }).then((result) => {
          commit('setStorage', { storage: 'sync', data: result })
        })
        dispatch('get', { storage: 'local' }).then((result) => {
          commit('setStorage', { storage: 'local', data: result })
        })
        resolve()
      })
    },
    /**
     * Get data from the chrome storage
     * @param {*} param0
     * @param {*} payload
     */
    get(_, payload) {
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
