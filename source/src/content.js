let defaultConfig = {
  protect_status: 'disable', // enable or disable
  protect_type: 'none', // css filter, etc
  display_type: 'none', // css selector
  protect_level: '8px', // css filter level, etc
};
let delay = 100; // Time in ms
let debug = false;

// Send message to console
function log(msg) {
  if (debug == true) {
    console.log(msg);
  }
}

// Get the storage and inject protect css to page
function handleInject() {
  chrome.storage.sync.get(null, function(result) {
    inject(result.protect_status, result.protect_type, result.protect_level, result.display_type);
  });
}

function init() {
  handleInject();
}
init();

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action == 'reinject') {
    reinject();
    sendResponse({ result: 'reinjected' });
  }
  return true;
});

function reinject() {
  // let find = document.getElementById('messenger-ultilities');
  handleInject();
  // if (handle == true && find != null) {
  //   find.remove();
  // }
}

/**
 * Inject protect css to page
 */
function inject(protect_status, protect_type, protect_level, display_type) {
  let e_id = 'messenger-utilities';
  setTimeout(function () {
    if (protect_status == null) protect_status = defaultConfig.protect_status;
    if (protect_type == null) protect_type = defaultConfig.protect_type;
    if (protect_level == null) protect_level = defaultConfig.protect_level;
    if (display_type == null) display_type = defaultConfig.display_type;
    if (protect_status == 'enable') {
      log('Injecting with protect_status('+protect_status+'), protect_type('+protect_type+'), protect_level('+protect_level+'), display type('+display_type+')');
      let css = '';
      let protect_css = '';
      let display_css = '';
      function addCSS(css_add) {
        protect_css += css_add;
        display_css += css_add;
        if (css_add !== ',') {
          if (display_type === 'hover') {
            display_css += ':hover';
          }
        }
      }
      function handleCSS(css_add) {
        // If protect_css/display_css is not empty then and , to the end of css1
        if (protect_css !== '') {
          addCSS(',');
        }
        //
        addCSS(css_add);
      }
      function addCSSProperties(level) {
        let output = '{';
        if (protect_type === 'blur') {
          output += 'filter: blur(' + level + ')'; // CSS
        }
        output += '}';
        return output;
      }
      function combineCSS() {
        css = protect_css;
        css += addCSSProperties(protect_level);
        if (display_type != 'none') {
          css += display_css;
          css += addCSSProperties(0);
        }
      }
      let filter_array = [
        /*
         * Left sidebar
         */
        'span[class~=a8c37x1j][class~=ni8dbmo4][class~=stjgntxs][class~=l9j0dhe7][class~=ltmttdrg][class~=g0qnabr5]', // Name
        'span[class~=a8c37x1j][class~=ni8dbmo4][class~=stjgntxs][class~=l9j0dhe7][class~=ltmttdrg][class~=g0qnabr5][class~=ojkyduve]', // Message
        'div[class=l9j0dhe7][role=row] > div[role=gridcell] svg', // Avatar
        /*
         * Texting
         */
        // Texting user / group information
        'img[class~=a8c37x1j][class~=d2edcug0][class~=sn7ne77z][class~=bixrwtb6]', // Texting avatar, right sidebar avatar
        'span[class~=a8c37x1j][class~=ni8dbmo4][class~=stjgntxs][class~=l9j0dhe7][class~=ltmttdrg][class~=g0qnabr5][class~=ojkyduve]', // Texting name
        // Incoming
        'div[data-testid=messenger_incoming_text_row] div[dir=auto]', // Text
        'div[data-testid=messenger_incoming_sticker_row] div[aria-label]', // Sticker
        'div[data-testid=incoming_group] img', // Image
        // Outgoing
        'div[data-testid=outgoing_message] div[dir=auto]', // Text
        'div[data-testid=outgoing_message] div[aria-label]', // Sticker
        'div[data-testid=outgoing_message] img', // Image
        // Other, general
        'div[class=nqmqzb3c]', // URL
        'div[class~=pfnyh3mw][class~=r9r71o1u][class~=m9osqain][class~=fsrhnwul][class~=dkr8dfph]', // Sender name
        'div[dir=auto][class=m9osqain]', // Quote text
        'img[class~=d2edcug0][class~=iko8p5ub][class~=sf5mxxl7][class~=e72ty7fz][class~=qlfml3jp][class~=qmr60zad][class~=jinzq4gt]', // Quote image
        'img[data-testid=messenger_single_seen_head]', // Seen avatar - single user
        /*
         * Other
         */
        // Right sidebar name
        'span[class~=d2edcug0][class~=hpfvmrgz][class~=qv66sw1b][class~=c1et5uql][class~=lr9zc1uh][class~=a8c37x1j][class~=keod5gw0][class~=nxhoafnm][class~=aigsh9s9][class~=d3f4x2em][class~=fe6kdd0r][class~=mau55g9w][class~=c8b282yb][class~=mdeji52x][class~=a5q79mjw][class~=g1cxx5fr][class~=lrazzd5p][class~=oo9gr5id][class~=oqcyycmt][dir=auto]',
      ];

      // Handle & Combine
      filter_array.forEach((element) => {
        handleCSS(element);
      });
      combineCSS();
      // Inject css into page
      let find = document.getElementById(e_id);
      // If not found existed element, create new
      // If found, update existed element
      if (find == null) {
        log('Creating new element...');
        let style = document.createElement('style');
        style.id = e_id;
        style.textContent = css;
        document.querySelector('body').append(style);
      } else {
        log('Updating existed element...');
        find.textContent = css;
      }
      // log(css);
      log('Injected!')
    } else {
      log('Not inject with protect_status('+protect_status+'), protect_type('+protect_type+'), protect_level('+protect_level+'), display type('+display_type+')');
      let find = document.getElementById(e_id);
      if (find != null) find.remove();
    }
    return true;
  }, delay);
}
