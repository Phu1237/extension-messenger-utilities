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

/**
 * FIXME: Duplicated code in configs.js
 */
class Configs {
  constructor() {
    this.defaultConfigs = [
      {
        name: 'protect_status',
        value: 'enable',
      },
      {
        name: 'protect_type',
        value: 'blur',
      },
      {
        name: 'protect_items',
        value: ['general', 'image', 'message', 'name'],
      },
      {
        name: 'protect_level',
        value: '8',
      },
      {
        name: 'display_type',
        value: 'hover',
      },
    ]
  }
  configsKeyValue() {
    let keys = this.defaultConfigs.map((config) => {
      return config.name
    })
    let values = this.defaultConfigs.map((config) => {
      return config.value
    })
    let configs = {}
    keys.forEach((key, i) => (configs[key] = values[i]))
    return configs
  }
  /**
   * Get a value from config
   */
  merge(configs = null) {
    return Object.assign(this.configsKeyValue(this.defaultConfigs), configs)
  }
}

module.exports = {
  helpers: new Helpers(),
  configs: new Configs(),
}
