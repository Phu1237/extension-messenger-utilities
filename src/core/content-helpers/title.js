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

export function inject() {
  let title = document.querySelector('title')
  let config = { childList: true }
  let mutation = new MutationObserver((mutations) => {
    log(mutations, mutations[0].target.text)
    let text = mutations[0].target.text
    if (/^(?!\([0-9]+\))((?!Messenger).)*$/g.test(text)) {
      log('Title match! Changing title from ' + text + ' to (*) Messenger')
      mutation.disconnect()
      if (getCurrentPage() === 'messenger.com') {
        title.text = '(*) Messenger'
      } else if (getCurrentPage() === 'facebook.com') {
        title.text = '(*) Facebook'
      }
      mutation.observe(title, config)
    }
  })
  mutation.observe(title, config)
}
