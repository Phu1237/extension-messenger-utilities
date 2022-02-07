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
              console.log(tabs[i].url)
              if (tabs[i].url.includes('messenger.com')) {
                chrome.tabs.sendMessage(
                  tabs[i].id,
                  { action: 'reinject' },
                  (response) => {
                    console.log(response)
                  }
                )
              }
            }
          } else {
            console.log('Not found any tab that match with query!')
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
     * Fetch filter from api
     */
    fetchFilter() {
      fetch(import.meta.env.VITE_FILTER_URL).then((response) => {
        if (response.status !== 200) {
          console.log(
            'Looks like there was a problem. Status Code: ' + response.status
          )
          return
        }

        // Examine the text in the response
        response.json().then((data) => {
          const filter = data
          chrome.storage.local.set({
            filter: filter,
            last_filter_updated: Date.now(),
          })
          console.log('Filter have just been updated')
        })
      })
    },
  },
}
