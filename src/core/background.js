/**
 * Fetch filter from API
 */
function fetchFilter() {
  fetch('http://phu1237.tk/messenger-utilities.json').then((response) => {
    if (response.status !== 200) {
      console.log(
        'Looks like there was a problem. Status Code: ' + response.status
      )
      return
    }

    // Examine the text in the response
    response.json().then((data) => {
      const filter = data.data
      chrome.storage.local.set({
        filter: filter,
        last_filter_updated: Date.now(),
      })
      console.log(filter)
      console.log('Filter have just been updated')
    })
  })
}
/**
 * Add content script to existed page when installed, enabled
 */
function addContentScript() {
  chrome.tabs.query(
    {
      url: ['*://*.messenger.com/*'],
    },
    (tabs) => {
      if (tabs.length > 0) {
        for (var i = 0; i < tabs.length; ++i) {
          if (tabs[i].url.includes('messenger.com')) {
            chrome.scripting.executeScript(
              {
                target: { tabId: tabs[i].id },
                files: ['content.js'],
              },
              (result) => {
                console.log(result)
              }
            )
          }
        }
      } else {
        console.log('Not found any tab that match with query!')
      }
    }
  )
}

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

/**
 * Run when browser start
 */
chrome.runtime.onStartup.addListener(() => {
  fetchFilter()
})

/**
 * Run when extension installed
 */
chrome.runtime.onInstalled.addListener(() => {
  fetchFilter()
  addContentScript()
})
