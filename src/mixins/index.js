import moment from 'moment'
import app from '../../package.json'
import Changelog from '@/core/changelog'
import fakeFetchData from '@/core/messenger-utilities.js'

export default {
  data() {
    return {
      isDev: import.meta.env.DEV
    }
  },
  computed: {
    _syncStorage() {
      return this.$store.state.storage.sync
    },
    _localStorage() {
      return this.$store.state.storage.local
    },
  },
  methods: {
    /**
     * Format date
     * @param {*} date
     * @param {*} format
     * @returns
     */
    formatDate(date, format = 'YYYY-MM-DD HH:mm') {
      return moment(date).format(format)
    },
    /**
     * Get value from package.json
     * @param {*} key
     * @returns
     */
    app(key) {
      return app[key]
    },
    /**
     * Get value from manifest
     * @param {*} key
     * @returns
     */
    manifest(key) {
      const manifest = chrome.runtime.getManifest()
      return manifest[key]
    },
    /**
     * Print log
     *
     * arguments length > 1: group, = 1: log
     * @returns
     */
    log() {
      if (import.meta.env.DEV) {
        if (arguments.length > 1) {
          console.group(arguments[0])
          for (let i = 1; i < arguments.length; i++) {
            console.log(arguments[i])
          }
          console.groupEnd()
          return
        }
        console.log(arguments[0])
        return
      }
    },
    /**
     * Find tab(s) and re-inject the code
     */
    reinject(reload = false) {
      chrome.tabs.query(
        {
          url: ['*://*.facebook.com/*', '*://*.messenger.com/*'],
        },
        (tabs) => {
          if (tabs.length > 0) {
            for (var i = 0; i < tabs.length; ++i) {
              if (
                tabs[i].url.includes('messenger.com') ||
                tabs[i].url.includes('facebook.com')
              ) {
                let action = reload ? 'reload' : 'reinject';
                chrome.tabs.sendMessage(
                  tabs[i].id,
                  { action: action },
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
    },
    /**
     * Get changelog from file
     * @param {*} limit
     * @returns
     */
    getChangelog(limit = null) {
      let changelog = Changelog.sort((a, b) => {
        return a.id > b.id ? -1 : 1
      })
      if (limit) {
        return changelog.slice(0, limit)
      }
      return changelog
    },
    /**
     * Fetch from API
     */
    fetchData() {
      if (import.meta.env.DEV) {
        this.setChromeData(fakeFetchData)
        return;
      }
      fetch(import.meta.env.VITE_FETCH_URL + '?time=' + Date.now()).then(
        (response) => {
          if (response.status !== 200) {
            this.log(
              'Looks like there was a problem. Status Code: ' + response.status
            )
            return
          }

          // Examine the text in the response
          response.json().then((data) => {
            chrome.storage.local.set({ last_updated: Date.now() })
            chrome.storage.local.get(['version'], (result) => {
              this.log('Current data version', result.version)
              this.log('Upcoming data version', data.version)
              this.log('Requirements:', data.dependencies)
              this.setChromeData(data, result)
            })
          })
        }
      )
    },
    setChromeData: function (data, result = {}) {
      if (!result.version || result.version < data.version) {
        if (
          app['version'] >= data.dependencies['messenger-utilities']
        ) {
          chrome.storage.local.set({ notification: data.notification })
          chrome.storage.local.set({
            ...data.data,
            version: data.version,
          }, () => {
            this.$store.dispatch('storage/fetch')
            this.reinject()
          })
          this.log('Extension data have just been updated')
        } else {
          chrome.storage.local.set({
            notification: {
              message:
                'Your version is out-of-date. Please update your extension to the latest version.',
              url: '',
              time: Date.now(),
            },
          })
          this.log('Extension version is not meet the requirements')
        }
      } else {
        this.log('Extension data is up-to-date')
      }
    },
    /**
     * Convert unix timestamp to readable datetime
     * @param {*} timestamp
     * @returns
     */
    convertUnixTimestamp(timestamp) {
      var a = new Date(timestamp)
      var dmy = a.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
      var hour = a.getHours()
      var min = a.getMinutes()
      var sec = a.getSeconds()
      var time = dmy + ' ' + hour + ':' + min + ':' + sec
      return time
    },
    /**
     * Convert object to array
     * @param {Object} object
     * @returns {Array}
     */
    objectToArray(object) {
      return Object.entries(object)
        .map(([key, value]) => {
          if (value === true) {
            return key
          }
        })
        .filter((item) => {
          return item != undefined
        })
    },
    /**
     * Convert array to object
     * @param {Array} array
     * @returns {Object}
     */
    arrayToObject(array) {
      return array.reduce((obj, item) => {
        obj[item] = true
        return obj
      }, {})
    },
  },
}
