export default {
  state: () => ({
    storage: {}
  }),
  mutations: {
    setStorage(state, payload) {
      state.storage = payload
    }
  },
  actions: {
    getStorage({ commit }) {
      chrome.storage.sync.get(null, (result) => {
        commit('setStorage', result)
      })
    },
  },
}