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

export function inject(hide_string, list) {
  log('Injecting...', hide_string, list)
  let selectors = []
  list.forEach((item) => {
    let id = item.split('|')[0]
    let selector = hide_string.replace('{id}', id)
    selectors.push(selector)
  })
  return selectors.join(',') + '{display:none !important}'
}
