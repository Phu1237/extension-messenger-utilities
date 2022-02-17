import helpers from './helpers'

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

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action == 'reinject') {
    reinject()
    sendResponse({ result: 'reinjected' })
  }
  return true
})

function reinject() {
  handleInject()
}

function getFilter(filter) {
  let messengerRegex = new RegExp('(.*)://(.*).messenger.com/(.*)')
  let facebookRegex = new RegExp('(.*)://(.*).facebook.com/(.*)')
  let domain = document.location.href
  if (messengerRegex.test(domain)) {
    return filter['messenger.com']
  } else if (facebookRegex.test(domain)) {
    // return Object.assign({}, filter['messenger.com'], filter['facebook.com'])
    return null
  }
}

/**
 * Inject protect css to page
 */
function inject(storage, local) {
  helpers.log('Injecting into ' + document.location.href)
  let e_id = 'messenger-utilities'

  if (storage.protect_status) {
    let css = ''
    let protect_css = ''
    let display_css = ''
    let filter = getFilter(local.filter)
    helpers.log('Injecting...', storage, local)

    /**
     * Add css to string
     * @param {*} css_add
     */
    let addCSS = function (css_add) {
      protect_css += css_add
      display_css += css_add
      if (css_add !== ',') {
        if (storage.display_type === 'hover') {
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
        if (storage.protect_type === 'blur') {
          output += 'filter: blur(' + level + 'px)'
        }
        if (storage.protect_type === 'reverse') {
          output += `-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);-o-transform:rotateY(180deg);-ms-transform:rotateY(180deg);unicode-bidi:bidi-override;direction:rtl;`
        }
      } else {
        if (storage.protect_type === 'blur') {
          output += 'filter: blur(0)'
        }
        if (storage.protect_type === 'reverse') {
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
      css += addCSSProperties(storage.protect_level)
      if (storage.display_type != 'none') {
        css += display_css
        css += addCSSProperties(0)
      }
    }

    // Handle & Combine
    helpers.log('Injecting with filter...', filter)
    for (element in filter) {
      if (
        Object.prototype.hasOwnProperty.call(storage.protect_items, element)
      ) {
        var element = filter[element]
        handleCSS(element.selector)
      }
    }
    combineCSS()
    // add z-index to img to fix some bugs
    css += 'img{ z-index: 999999999 }'

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
      helpers.log('Creating new element...', div)
    } else {
      find.querySelector('style').textContent = css
      helpers.log('Updating existed element...', find.querySelector('style'))
    }
    // log(css);
    helpers.log('Injected!')
  } else {
    helpers.log('Not injecting')
    let find = document.getElementById(e_id)
    if (find != null) find.remove()
  }
  return true
}
