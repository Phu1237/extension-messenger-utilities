class Helpers {
  constructor() {
    this.inDebugMode = import.meta.env.DEV
  }

  /**
   * Print log
   *
   * @param {*} data
   * @param {Boolean} force
   * @returns
   */
  log(data, force = false) {
    if (force === true) {
      console.log(data)
      return true
    } else if (this.inDebugMode === true) {
      console.log(data)
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
  setStorage(key, value) {
    this.log('Storage: set ' + key + '=' + value)
    chrome.storage.sync.set({ [key]: value })
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

module.exports = {
  helpers: new Helpers(),
  configs: configs,
}
