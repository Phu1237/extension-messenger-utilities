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

export function inject(sync, local, filter) {
  let css = ''
  let protect_css = ''
  let display_css = ''
  log('Injecting...', sync, local)

  /**
   * Add css to string
   * @param {*} css_add
   */
  let addCSS = function (css_add) {
    protect_css += css_add
    display_css += css_add
    if (css_add !== ',') {
      if (sync.display_type === 'hover') {
        display_css += ':hover'
      }
    }
  }
  let handleCSS = function (css_add) {
    // if item.selector attribute is an array
    if (Array.isArray(css_add)) {
      css_add.forEach((item) => {
        handleCSS(item)
      })
    } else {
      // if css_add is text (plain text, text from item.selector)
      // If protect_css/display_css is not empty then and , to the end of it
      if (protect_css !== '') {
        addCSS(',')
      }
      //
      addCSS(css_add)
    }
  }

  /**
   * Add properties to css
   * @param {*} level Protect level
   * @returns
   */
  let addCSSProperties = function (level = 0) {
    let output = '{'
    if (level != 0) {
      if (sync.protect_type === 'blur') {
        output += 'filter: blur(' + level + 'px)'
      }
      if (sync.protect_type === 'reverse') {
        output += `-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);-o-transform:rotateY(180deg);-ms-transform:rotateY(180deg);unicode-bidi:bidi-override;direction:rtl;`
      }
    } else {
      if (sync.protect_type === 'blur') {
        output += 'filter: blur(0)'
      }
      if (sync.protect_type === 'reverse') {
        output += `-webkit-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-o-transform:rotateY(0deg);-ms-transform:rotateY(0deg);unicode-bidi:normal;direction:ltr;`
      }
    }

    output += '}'
    return output
  }

  /**
   * Combine protect_css amd display_css into one
   */
  let combineCSS = function () {
    css = protect_css
    css += addCSSProperties(sync.protect_level)
    if (sync.display_type != 'none') {
      css += display_css
      css += addCSSProperties(0)
    }
  }

  // Handle & Combine
  log('Injecting with filter...', filter)
  for (element in filter) {
    if (Object.prototype.hasOwnProperty.call(sync.protect_items, element)) {
      var element = filter[element]
      handleCSS(element.selector)
    }
  }
  combineCSS()
  // add z-index to img to fix some bugs
  css += 'img{ z-index: 999999999 }'
  return css
}
