import { inject as injectCSS } from './content-helpers'

// Listen to chrome event
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.action == 'reinject') {
		reinject()
		sendResponse({ result: 'reinjected' })
	} else if (request.action == 'reload') {
		location.reload()
	}
	return true
})

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
	log('Injecting into ' + document.location.href)
	injectCSS(storage, local)
}
