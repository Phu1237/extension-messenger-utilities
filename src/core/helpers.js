class Helpers {
  constructor() {
    this.inDebugMode = import.meta.env.DEV
  }

  /**
   * Print log
   *
   * arguments length > 1: group, = 1: log
   * @returns
   */
  log() {
    if (this.inDebugMode) {
      if (arguments.length > 1) {
        console.group(arguments[0])
        for (let i = 1; i < arguments.length; i++) {
          console.log(arguments[i])
        }
        console.groupEnd()
      } else {
        console.log(arguments[0])
      }
      return true
    }
    return false
  }

  /**
   * Set a storage item value
   *
   * @param {String} key
   * @param {*} value
   */
  setStorage(key, value, storage = 'sync') {
    switch (storage) {
      case 'sync':
        this.log('Sync storage: set ' + key + '=' + value)
        chrome.storage.sync.set({ [key]: value })
        break
      case 'local':
        this.log('Sync storage: set ' + key + '=' + value)
        chrome.storage.local.set({ [key]: value })
        break
    }
  }

  fetchFilter() {
    return new Promise((resolve, reject) => {
      fetch(import.meta.env.VITE_FILTER_URL).then((response) => {
        if (response.status !== 200) {
          this.log(
            'Looks like there was a problem. Status Code: ' + response.status
          )
          reject(response)
        }

        // Examine the text in the response
        response.json().then((data) => {
          const filter = data.data
          chrome.storage.local.set({
            filter: filter,
            last_filter_updated: Date.now(),
          })
          resolve(filter)
        })
      })
    })
  }
  /**
   * Find tab(s) and re-inject the code
   */
  reinject() {
    chrome.tabs.query(
      {
        url: ['*://*.messenger.com/*'],
      },
      (tabs) => {
        if (tabs.length > 0) {
          for (var i = 0; i < tabs.length; ++i) {
            this.log(tabs[i].url)
            if (tabs[i].url.includes('messenger.com')) {
              chrome.tabs.sendMessage(
                tabs[i].id,
                { action: 'reinject' },
                (response) => {
                  this.log(response)
                }
              )
            }
          }
        } else {
          this.log('Not found any tab that match with query!')
        }
      }
    )
  }
}

export default new Helpers()
