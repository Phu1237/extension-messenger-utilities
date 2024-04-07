import { getFilter } from './protect_privacy'
import { inject as injectHideChat } from './hide_chat'
import { inject as injectProtectTitle } from './title'

/**
 * Print log group
 *
 * @returns
 */
function logGroup(name) {
  if (import.meta.env.DEV) {
    if (name !== '') {
      console.group(name)
    } else {
      console.groupEnd()
    }
  }
}

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
    } else {
      console.log(arguments[0])
    }
    return true
  }
  return false
}

function getCurrentPage() {
  let messengerRegex = new RegExp('(.*)://(.*).messenger.com/(.*)')
  let facebookRegex = new RegExp('(.*)://(.*).facebook.com/(.*)')
  let domain = document.location.href
  if (messengerRegex.test(domain)) {
    return 'messenger.com'
  } else if (facebookRegex.test(domain)) {
    return 'facebook.com'
  }
}

function injectHTML(css) {
  let e_id = 'messenger-utilities'
  // Inject css into page
  let find = document.getElementById(e_id)
  // If not found existed element, create new
  // If found, update existed element
  if (find == null) {
    let div = document.createElement('div')
    div.id = e_id
    let style = document.createElement('style')
    style.textContent = css
    div.appendChild(style)
    document.querySelector('body').append(div)
    log('Creating new element...', div)
  } else {
    log('Removing old element...')
    find.remove()
    injectHTML(css)
  }
}

export function inject(sync, local) {
  let css = ''
  log('Injecting...', sync, local)
  if (sync.protect_status && sync.protect_domains[getCurrentPage()]) {
    logGroup('Injecting protect privacy...')
    css += getFilter(sync, local, getCurrentPage())
    logGroup();
  }
  if (sync.hide_status) {
    logGroup('Injecting hide chat...')
    let hide_list = sync.hide_list
    hide_list = hide_list.split('\n')
    let hide_chat = local.hide_chat[getCurrentPage()]
    let hide_chat_e2ee = local.hide_chat[getCurrentPage() + '_e2ee']
    css += injectHideChat(hide_chat, hide_list)
    css += injectHideChat(hide_chat_e2ee, hide_list)
    logGroup()
  }
  if (sync.protect_title) {
    logGroup('Injecting protect title...')
    css += injectProtectTitle()
    logGroup()
  }
  log('Injecting with css ', css)
  injectHTML(css)
  log('Injected!')
}
