import { configs, helpers } from '../../global'

let delay = 100; // Time in ms

// Get a storage item value
function handleConfigs() {
    helpers.log('Init: handle configs');
    helpers.handleConfigs(configs);
}

function updateProtectStatusBox(protect_status) {
    let box = document.getElementById('protect_status_box');
    if (protect_status == 'enable') {
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
    helpers.saveChanges();
    helpers.reinject();
}

/**
 * Init
 */
function init() {
    helpers.log('Init');
    let version = document.getElementById('version');
    if (version != null) {
        version.innerText += chrome.runtime.getManifest().version;
    }
    let protect_level = document.getElementById('protect_level');
    let lb_protect_level = document.getElementById('lb_protect_level');
    if (protect_level && lb_protect_level) {
        setTimeout(function () {
            lb_protect_level.innerText = protect_level.value + '%'
        }, 100);
        protect_level.addEventListener('input', function () {
            helpers.log('Input');
            lb_protect_level.innerText = protect_level.value + '%'
        });
    }
    handleConfigs();
}
init();

/**
 * Events
 */
// Click to open url in new tab
document.addEventListener('DOMContentLoaded', function () {
    var links = document.getElementsByTagName('a');
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
// Click on save button
document.getElementById('save_btn').addEventListener('click', function (e) {
    saveChanges();
});