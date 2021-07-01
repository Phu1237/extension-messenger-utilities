let defaultConfig = {
  protect_status: "disable", // enable or disable
  protect_type: "none", // css filter, etc
  display_type: "none", // css selector
  protect_level: "8px", // css filter level, etc
};
let delay = 100; // Time in ms
let debug = false;

/**
 * Functions
 */
// Send message to console
function log(msg) {
  if (debug == true) {
    console.log(msg);
  }
}
// Set or Store a new storage item
function setStorage(key, value) {
  log('Storage: set ' + key + '=' + value);
  chrome.storage.sync.set({ [key]: value });
}
// Get a storage item value
function handlePopup() {
  log('Init: handle popup');
  let elements = {
    protect_status: 'input[name=protect_status]',
    protect_type: 'input[name=protect_type]',
    protect_level: 'input[name=protect_level]',
    display_type: 'input[name=display_type]'
  }
  chrome.storage.sync.get(null, function (result) {
    Object.entries(elements).forEach(([key]) => {
      if (key == 'protect_status') updateProtectStatusBox(result[key]);
      log('Finding ' + elements[key] + '[value="' + result[key] + '"]' + '...');
      try {
        var find = document.querySelector(elements[key] + '[value="' + result[key] + '"]');
        find.setAttribute('checked', true);
      } catch (error) {
        log('Can not find!');
        log('Set to default...');
        var find = document.querySelector(elements[key] + '[value="' + defaultConfig[key] + '"]');
        if (find != null) {
          find.setAttribute('checked', true);
        }
      }
      log('Done')
    });
  });
}

function updateProtectStatusBox(protect_status) {
  let box = document.getElementById('protect_status_box');
  if (protect_status == "enable") {
    box.classList.remove('bg-gray-300');
    box.classList.add('bg-green-300');
    box.querySelector('img').src = '../icons/svgs/eye-with-line.svg';
  } else {
    box.classList.remove('bg-green-300');
    box.classList.add('bg-gray-300');
    box.querySelector('img').src = '../icons/svgs/eye.svg';
  }
}

// Save changes to the Chrome storage
function saveChanges() {
  // Get a value.
  let protect_status = document.querySelector('input[name="protect_status"]:checked').value;
  let protect_type = document.querySelector('input[name="protect_type"]:checked').value;
  let display_type = document.querySelector('input[name="display_type"]:checked').value;
  setStorage('protect_status', protect_status);
  setStorage('protect_type', protect_type);
  setStorage('display_type', display_type);
  updateProtectStatusBox(protect_status);
  log('Saved');
  let alert = document.getElementById('alert');
  alert.innerText = 'Saved! If nothing happens, please refresh the page for the changes to take effect!';
  alert.classList.remove('hidden');
  chrome.tabs.query({
    url: [
      "*://*.messenger.com/*"
    ]
  }, function (tabs) {
    if (tabs.length > 0) {
      for (var i = 0; i < tabs.length; ++i) {
        log(tabs[i].url);
        if (tabs[i].url.includes('messenger.com')) {
          chrome.tabs.sendMessage(tabs[i].id, { action: "reinject" }, function (response) {
            log(response);
          });
        }
      }
    } else {
      log('Not found any tab that match with query!');
    }
  });
}

/**
 * Init
 */
function init() {
  log('Init');
  handlePopup();
}
init();

/**
 * Events
 */
// Click to open url in new tab
document.addEventListener('DOMContentLoaded', function () {
  var links = document.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    (function () {
      var ln = links[i];
      var location = ln.href;
      ln.onclick = function () {
        chrome.tabs.create({ active: true, url: location });
      };
    })();
  }
});
// Go to options page
// document.querySelector("#go-to-options").addEventListener("click", function () {
//   if (chrome.runtime.openOptionsPage) {
//     chrome.runtime.openOptionsPage();
//   } else {
//     window.open(chrome.runtime.getURL("options.html"));
//   }
// });
// Click on save button
document.getElementById("save_btn").addEventListener("click", function (e) {
  saveChanges();
});