import moment from 'moment'
import app from '../../package.json'
import Changelog from '@/core/changelog'

export default {
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
