let defaultConfig = {
  protect_status: 'disable', // enable or disable
  protect_type: 'none', // css filter, etc
  display_type: 'none', // css selector
  protect_level: '8px', // css filter level, etc
};
let delay = 100; // Time in ms
let debug = false; // README: Debug - true | false

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
  handleInject();
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
        // if is main item of filter_array (have selector attribute)
        if (css_add.selector != null) {
          handleCSS(css_add.selector);
        } else if (Array.isArray(css_add)) { // if item.selector attribute is an array
          css_add.forEach((item) => {
            handleCSS(item);
          });
        } else { // if css_add is text (plain text, text from item.selector)
          // If protect_css/display_css is not empty then and , to the end of it
          if (protect_css !== '') {
            addCSS(',');
          }
          //
          addCSS(css_add);
        }
      }
      function addCSSProperties(level = 0) {
        let output = '{';
        if (level != 0) {
          if (protect_type === 'blur') {
            output += 'filter: blur(' + level + ')';
          }
          if (protect_type === 'reverse') {
            output += `-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);-o-transform:rotateY(180deg);-ms-transform:rotateY(180deg);unicode-bidi:bidi-override;direction:rtl;`;
          }
        } else {
          if (protect_type === 'blur') {
            output += 'filter: blur(0)';
          }
          if (protect_type === 'reverse') {
            output += `-webkit-transform:rotateY(0deg);-moz-transform:rotateY(0deg);-o-transform:rotateY(0deg);-ms-transform:rotateY(0deg);unicode-bidi:normal;direction:ltr;`;
          }
        }

        output += '}';
        return output;
      }

      /**
       * Combine protect_css amd display_css into one
       */
      function combineCSS() {
        css = protect_css;
        css += addCSSProperties(protect_level);
        if (display_type != 'none') {
          css += display_css;
          css += addCSSProperties(0);
        }
      }

      /**
       * Array that contains all selectors for css
       */
      let filter_array = [
        general = [
          {
            name: "sender_name",
            selector: "div[class~=pfnyh3mw][class~=r9r71o1u][class~=m9osqain][class~=fsrhnwul][class~=dkr8dfph]",
          },
          {
            name: "tooltip",
            selector: "span[role=tooltip]>div>div>span[dir=auto]"
          }
        ],
        image = [
          {
            name: "left_sidebar",
            selector: "image" // avatar
          },
          // {
          //   name: "sender",
          //   selector: "span>div>img"
          // },
          // {
          //   name: "reader",
          //   selector: "div>span>img"
          // },
          {
            name: "img_tag",
            selector: "img:not([width='16'])" // protect image without message emoji
          }
        ],
        message = [
          {
            name: "left_sidebar",
            selector: [
              "div[data-testid=mwthreadlist-item]", // full
              // "div[data-testid=mwthreadlist-item]>div>div>a>div>div>div>div>div>div>span>span>span>span", // name
              // "div[data-testid=mwthreadlist-item]>div>div>a>div>div>div>div>div>div>span>span>div>span", // text
            ]
          },
          {
            name: "general",
            selector: [
              "div[role=main]>div>div>div>div>div>div>div>div>div>div>div>h2>span>span", // name
              "div[role=main]>div>div>div>div>div>div>div>div>div>div>div>div>div>div>span", // right_sidebar name
            ]
          },
          {
            name: "incoming",
            selector: [
              // "div[data-scope=messages_table]>div>span>div>div>div>span>a", // link text
              // "div[data-scope=messages_table]>div>span>div>div>a>div", // link footer
              // "div[data-testid=incoming_group] a>img", // image
              // "div[data-testid=messenger_incoming_emoji_row] img", // emoji
              "div[data-testid=messenger_incoming_text_row]>span>div>div", // text
              /**
               * README: need better method
               * For: other
               * not(span): not emoji in text
               * not(div[class=nred35xi]): not link footer
               */
              "div[data-scope=messages_table]>div>span>div>div:not(div[class=nred35xi])",
            ]
          },
          {
            name: "outgoing",
            selector: [
              "div[data-testid^=outgoing_message]>span>div>div>div>span>a", // link text
              "div[data-testid^=outgoing_message]>span>div>div>div>a>div", // link footer
              // "div[data-testid^=outgoing_message]>span>div>div>div>a>img", // image
              // "div[data-testid^=outgoing_message]>span>div>span>img", // emoji
              "div[data-testid^=outgoing_message]>span>div>div>a", // file
              /**
               * README: need better method
               * For: other
               * not(span): not emoji in text
               * not(div[class=nred35xi]): not link footer
               */
              "div[data-testid^=outgoing_message]>span>div>div:not(span):not(div[class=nred35xi])",
            ]
          },
          {
            name: "quote",
            selector: [
              // "div[data-testid=incoming_group] div[class~=hyh9befq][class~=pipptul6][class~=sq6gx45u]", // name
              // "div[data-testid=outgoing_group] div[class~=hyh9befq][class~=pipptul6][class~=sq6gx45u]", // name
              'div[dir=auto][class=m9osqain]', // Quote text
              'img[class~=d2edcug0][class~=iko8p5ub][class~=sf5mxxl7][class~=e72ty7fz][class~=qlfml3jp][class~=qmr60zad][class~=jinzq4gt]', // Quote image
            ]
          }
        ]
      ];

      // Handle & Combine
      filter_array.forEach((element) => {
        if (Array.isArray(element)) {
          element.forEach((item) => {
            handleCSS(item);
          });
        } else {
          handleCSS(element);
        }
      });
      combineCSS();
      // add z-index to img to fix some bugs
      css += 'img{ z-index: 999999999 }';

      // Inject css into page
      let find = document.getElementById(e_id);
      // If not found existed element, create new
      // If found, update existed element
      if (find == null) {
        log('Creating new element...');
        let div = document.createElement('div');
        div.id = e_id;
        let style = document.createElement('style');
        style.textContent = css;
        div.appendChild(style);
        document.querySelector('body').append(div);
      } else {
        log('Updating existed element...');
        log(find.querySelector('style'));
        find.querySelector('style').textContent = css;
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
