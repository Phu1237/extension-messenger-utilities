import { mergeStorage } from './storage?inline'
import packageJson from '../../package.json?raw'
import fakeFetchData from './messenger-utilities.js?inline'

const app = JSON.parse(packageJson)
/**
 * Print log
 *
 * arguments length > 1: group, = 1: log
 * @returns
 */
function log() {
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
}
/**
 * Fetch from API
 */
function fetchData() {
  if (import.meta.env.DEV) {
    setChromeData(fakeFetchData)
    return;
  }
  fetch(import.meta.env.VITE_FETCH_URL + '?time=' + Date.now()).then(
    (response) => {
      if (response.status !== 200) {
        log('Looks like there was a problem. Status Code: ' + response.status)
        return
      }

      // Examine the text in the response
      response.json().then((data) => {
        setChromeData(data)
      })
    }
  )
}
function setChromeData(data, result = {}) {
  if (!result.version || result.version < data.version) {
    if (
      app['version'] >= data.dependencies['messenger-utilities']
    ) {
      chrome.storage.local.set({ notification: data.notification })
      chrome.storage.local.set({
        ...data.data,
        version: data.version,
      })
      log('Extension data have just been updated')
    } else {
      chrome.storage.local.set({
        notification: {
          message:
            'Your version is out-of-date. Please update your extension to the latest version.',
          url: '',
          time: Date.now(),
        },
      })
      log('Extension version is not meet the requirements')
    }
  } else {
    log('Extension data is up-to-date')
  }
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
          const manifest = chrome.runtime.getManifest()
          if (manifest.manifest_version == 2) {
            chrome.tabs.executeScript(
              tabs[i].id,
              {
                file: 'content.js',
              },
              () => { }
            )
          } else {
            chrome.scripting.executeScript(
              {
                target: { tabId: tabs[i].id },
                files: ['content.js'],
              },
              () => { }
            )
          }
        }
      } else {
        log('Not found any tab that match with query!')
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
      log('All sync storage items', result)
    })

    /**
     * Print all local storage items
     */
    chrome.storage.local.get(null, function (result) {
      log('All local storage items', result)
    })

    const autoClearStorage = false
    if (autoClearStorage) {
      /**
       * Delete all sync storage items
       */
      chrome.storage.sync.clear().then(() => {
        log('Cleared all sync storage items')
      })
      /**
       * Delete all local storage items
       */
      chrome.storage.local.clear().then(() => {
        log('Cleared all local storage items')
      })
    }
  }
}
