import moment from 'moment'
import app from '../../package.json'
import Changelog from '@/core/changelog'

export default {
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
     * Get value in package.json
     * @param {*} key
     * @returns
     */
    app(key) {
      return app[key]
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
            chrome.storage.local.set({
              hide: data.data.hide,
              filter: data.data.filter,
              last_updated: Date.now(),
            })
            this.log('Extension data have just been updated')
          })
        }
      )
    },
    convertUnixTimestamp(timestamp) {
      var a = new Date(timestamp)
      var dmy = a.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
      var hour = a.getHours()
      var min = a.getMinutes()
      var time = dmy + ' ' + hour + ':' + min
      return time
    },
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
    arrayToObject(array) {
      return array.reduce((obj, item) => {
        obj[item] = true
        return obj
      }, {})
    },
  },
}
