import { mergeStorage } from './storage'
import packageJson from '../../package.json?raw'

const app = JSON.parse(packageJson)
/**
 * Fetch from API
 */
function fetchData() {
  fetch(import.meta.env.VITE_FETCH_URL + '?time=' + Date.now()).then(
    (response) => {
      if (response.status !== 200) {
        console.log(
          'Looks like there was a problem. Status Code: ' + response.status
        )
        return
      }

      // Examine the text in the response
      response.json().then((data) => {
        console.log('Requirements:', data.dependencies)
        if (app['version'] >= data.dependencies['messenger-utilities']) {
          chrome.storage.local.set({
            ...data.data,
            last_updated: Date.now(),
          })
          console.log('Extension data have just been updated')
        } else {
          console.log('Requirements:', data.dependencies)
          console.log('Extension version is not meet the requirement')
        }
      })
    }
  )
}
/**
 * Add content script to existed page when installed, enabled
 */
function addContentScript() {
  chrome.tabs.query(
    {
      url: ['*://*.facebook.com/*', '*://*.messenger.com/*'],
    },
    (tabs) => {
      if (tabs.length > 0) {
        for (var i = 0; i < tabs.length; ++i) {
          chrome.scripting.executeScript(
            {
              target: { tabId: tabs[i].id },
              files: ['content.js'],
            },
            () => {}
          )
        }
      } else {
        console.log('Not found any tab that match with query!')
      }
    }
  )
}

/**
 * Run when browser start
 */
chrome.runtime.onStartup.addListener(() => {
  chrome.storage.local.get(['update_interval', 'last_updated'], (result) => {
    if (result.update_interval && result.last_updated) {
      const now = Date.now()
      const lastUpdated = result.last_updated
      let interval = -1
      // switch (result.update_interval) {
      //   case 'daily':
      //     interval = 86400000
      //     break
      //   case 'weekly':
      //     interval = 604800000
      //     break
      //   case 'monthly':
      //     interval = 2592000000
      //     break
      //   case 'startup':
      //     interval = -1
      //     break
      //   default:
      //     interval = 86400000
      //     break
      // }
      if (interval === -1 || now - lastUpdated > interval) {
        fetchData()
      }
    }
  })
})

/**
 * Run when extension installed
 */
chrome.runtime.onInstalled.addListener(() => {
  mergeStorage('sync')
  mergeStorage('local')
  fetchData()
  installedLog()
  addContentScript()
})

function installedLog() {
  if (import.meta.env.DEV) {
    /**
     * Print all sync storage items
     */
    chrome.storage.sync.get(null, function (result) {
      console.group('All sync storage items')
      console.log(result)
      console.groupEnd()
    })

    /**
     * Print all local storage items
     */
    chrome.storage.local.get(null, function (result) {
      console.group('All local storage items')
      console.log(result)
      console.groupEnd()
    })

    const autoClearStorage = true
    if (autoClearStorage) {
      /**
       * Delete all sync storage items
       */
      chrome.storage.sync.clear().then(() => {
        console.log('Cleared all sync storage items')
      })
      /**
       * Delete all local storage items
       */
      chrome.storage.local.clear().then(() => {
        console.log('Cleared all local storage items')
      })
    }
  }
}
