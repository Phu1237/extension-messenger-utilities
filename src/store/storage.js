export default {
  namespaced: true,
  state: () => ({
    sync: {
      abcd: 123
    },
    local: {},
  }),
  mutations: {
    setStorage(state, payload) {
      console.log('setStorage', payload);
      switch (payload.storage) {
        case 'sync':
          state.sync = payload.data;
          break;
        case 'local':
          state.local = payload.data;
          break;
      }
    }
  },
  actions: {
    /**
     * Fetch data from the chrome storage
     */
    async fetch({ commit, dispatch }) {
      await dispatch('get', { storage: 'sync' }).then((result) => {
        commit('setStorage', { storage: 'sync', data: result })
      })
      await dispatch('get', { storage: 'local' }).then((result) => {
        commit('setStorage', { storage: 'local', data: result })
      })
      return;
    },
    /**
     * Get data from the chrome storage
     * @param {*} param0
     * @param {*} payload
     */
    get({ }, payload) {
      return new Promise((resolve, reject) => {
        switch (payload.storage) {
          case 'sync':
            chrome.storage.sync.get(null, (result) => {
              resolve(result);
            })
            break;
          case 'local':
            chrome.storage.local.get(null, (result) => {
              resolve(result);
            })
            break;
        }
      })
    },
    /**
     * Set data to the chrome storage
     * @param {Object} payload
     */
    set({ state }, payload) {
      let key = payload.data.key;
      let value = payload.data.value;
      switch (payload.storage) {
        case 'sync':
          state.sync[key] = value;
          chrome.storage.sync.set(payload.data);
          break;
        case 'local':
          state.local[key] = value;
          chrome.storage.local.set(payload.data);
          break;
      }
    }
  },
}