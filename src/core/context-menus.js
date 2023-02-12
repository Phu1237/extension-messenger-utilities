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

function createContextMenu() {
  chrome.contextMenus.create({
    id: "options",
    title: "All options",
    contexts: ["all"],
    documentUrlPatterns: ["*://*.facebook.com/*", "*://*.messenger.com/*"],
  })
  chrome.contextMenus.create({
    id: "line-1",
    contexts: ["page"],
    type: "separator",
    documentUrlPatterns: ["*://*.facebook.com/*", "*://*.messenger.com/*"],
  })
  // chrome.contextMenus.create({
  //   id: "add-to-whitelist",
  //   title: "Add to whitelist",
  //   contexts: ["page"],
  //   type: "checkbox",
  //   documentUrlPatterns: ["*://*.facebook.com/*", "*://*.messenger.com/*"],
  // })
  // chrome.contextMenus.create({
  //   id: "line-2",
  //   contexts: ["page"],
  //   type: "separator",
  //   documentUrlPatterns: ["*://*.facebook.com/*", "*://*.messenger.com/*"],
  // })
  chrome.contextMenus.create({
    id: "disable-enable-hide-chat",
    title: "Disable / Enable hide chat",
    type: "normal",
    contexts: ["page"],
    documentUrlPatterns: ["*://*.facebook.com/*", "*://*.messenger.com/*"],
  })
  chrome.contextMenus.create({
    id: "add-to-hide-list",
    title: "Add to hide list",
    type: "checkbox",
    contexts: ["page"],
    documentUrlPatterns: ["*://*.facebook.com/*", "*://*.messenger.com/*"],
  })
}

function addEventListeners() {
  chrome.contextMenus.onClicked.addListener((item) => {
    const tld = item.menuItemId
    log(tld, item);
    switch (tld) {
      case "options":
        if (chrome.runtime.openOptionsPage) {
          chrome.runtime.openOptionsPage()
        } else {
          window.open(chrome.runtime.getURL('ui.html#/dashboard/options'))
        }
        break;
      // case "add-to-whitelist":
      //   // Get the storage and inject protect css to page
      //   chrome.storage.sync.get('protect_whitelist', (sync) => {
      //     let facebookId = getFacebookId(item.pageUrl)
      //     let whitelist = sync['protect_whitelist'];
      //     if (item.checked) {
      //       whitelist = (whitelist + "\n" + getFacebookId(item.pageUrl)).trim()
      //     } else {
      //       let regex = new RegExp(facebookId + "[\n]?", "g")
      //       whitelist = whitelist.replace(regex, "")
      //     }
      //     chrome.storage.sync.set({
      //       protect_whitelist: whitelist
      //     })
      //     reinject()
      //   })
      //   break;
      case "disable-enable-hide-chat":
        // Get the storage and inject protect css to page
        chrome.storage.sync.get('hide_status', (sync) => {
          chrome.storage.sync.set({
            hide_status: !sync['hide_status']
          })
          reinject()
        })
        break;
      case "add-to-hide-list":
        // Get the storage and inject protect css to page
        chrome.storage.sync.get('hide_list', (sync) => {
          let facebookId = getFacebookId(item.pageUrl)
          let hide_list = sync['hide_list'];
          if (item.checked) {
            hide_list = (hide_list + "\n" + getFacebookId(item.pageUrl)).trim()
          } else {
            let regex = new RegExp(facebookId + "[\n]?", "g")
            hide_list = hide_list.replace(regex, "")
          }
          chrome.storage.sync.set({
            hide_list: hide_list
          })
          reinject()
        })
        break;
      default:
        log('context id: ', tld)
    }
  });
}

function reinject() {
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
            chrome.tabs.sendMessage(
              tabs[i].id,
              { action: 'reinject' },
              (response) => {
                log(response)
              }
            )
          }
        }
      } else {
        log('Not found any tab that match with query!')
      }
    }
  )
}

function getFacebookId(url) {
  const regex = /https:\/\/www.messenger.com\/t\/(.*)/
  const match = url.match(regex)
  if (match) {
    return match[1]
  }
  return null
}

chrome.tabs.onUpdated.addListener(function (_tabId, _changeInfo, tab) {
  if (tab.url) {
    let url = tab.url
    chrome.storage.sync.get(['hide_list'], (sync) => {
      let facebookId = getFacebookId(url)
      let hide_list = sync['hide_list']
      if (hide_list.includes(facebookId)) {
        log('find in hide list', url, facebookId, hide_list)
        chrome.contextMenus.update("add-to-hide-list", {
          checked: true,
        })
      } else {
        log('not find in hide list', url, facebookId, hide_list)
        chrome.contextMenus.update("add-to-hide-list", {
          checked: false,
        })
      }
    })
  }
});

export function init() {
  createContextMenu()
  addEventListeners()
}