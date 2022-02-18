import helpers from './helpers'
import { inject as injectCSS } from './content-helpers'

// Listen to chrome event
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action == 'reinject') {
    reinject()
    sendResponse({ result: 'reinjected' })
  }
  return true
})

// Get the storage and inject protect css to page
function handleInject() {
  chrome.storage.sync.get(null, (sync) => {
    chrome.storage.local.get(null, (local) => {
      inject(sync, local)
    })
  })
}

// Startup
function init() {
  handleInject()
}
init()

function reinject() {
  handleInject()
}

/**
 * Inject protect css to page
 */
function inject(storage, local) {
  helpers.log('Injecting into ' + document.location.href)
  injectCSS(storage, local)
  if (storage.protect_status) {
    //
  }
}
