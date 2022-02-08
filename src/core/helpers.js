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
  log(...data) {
    if (this.inDebugMode === true) {
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
    this.defaultConfigs = {
      protect_status: {
        name: 'protect_status',
        label: 'Protect status',
        description: 'Protect status',
        type: Boolean,
        value: true,
      },
      protect_type: {
        name: 'protect_type',
        label: 'Protect type',
        description: 'Protect type',
        type: String,
        value: 'blur',
      },
      protect_items: {
        name: 'protect_items',
        label: 'Protect items',
        description: 'Protect items',
        type: Object,
        value: {
          general: {
            name: 'general',
            label: 'General items',
            description: 'Tooltip, etc',
            type: Boolean,
            value: true,
          },
          image: {
            name: 'image',
            label: 'Image',
            description:
              'Avatar, icon message, seen avatar icon, seen avatar icon in group, video, chatter avatar, etc',
            type: Boolean,
            value: true,
          },
          name: {
            name: 'name',
            label: 'Name',
            description:
              'Left sidebar name, chatter name, right sidebar name, etc',
            type: Boolean,
            value: true,
          },
          message: {
            name: 'message',
            label: 'Message',
            description:
              'Left sidebar message, call block, chatter message, etc',
            type: String,
            value: true,
          },
        },
      },
      protect_level: {
        name: 'protect_level',
        label: 'Protect level',
        description: 'Protect level',
        type: Number,
        value: 8,
      },
      display_type: {
        name: 'display_type',
        label: 'Display type',
        description: 'Display type',
        type: String,
        value: 'hover',
      },
    }
  }
  /**
   * Convert object to key-value only
   * @param {*} object
   * @returns
   */
  toKeyValueOnly(object) {
    if (typeof object === 'object') {
      Object.entries(object).forEach(([key, value]) => {
        value = value.value
        object[key] = value
      })
    }
    return object
  }
  /**
   * Get a value from config
   */
  merge(configs = null) {
    if (configs) {
      let configsObject = this.defaultConfigs
      Object.entries(configs).forEach(([key, value]) => {
        if (Object.prototype.hasOwnProperty.call(this.defaultConfigs, key)) {
          configsObject[key].value = value
        }
      })
    }
    return this.defaultConfigs
  }
  /**
   * Object comes last will overwrite any property with the same key before it.
   * @param {*} defaultObject
   * @param {*} overwriteObject
   * @returns
   */
  mergeForContent(configs = null) {
    return this.toKeyValueOnly(this.merge(configs))
  }
}

module.exports = {
  helpers: new Helpers(),
  configs: new Configs(),
}
