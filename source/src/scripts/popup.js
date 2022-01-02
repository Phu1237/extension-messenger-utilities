import { configs, helpers } from '../../global'

// Get a storage item value
function handlePopup() {
    helpers.log('Init: handle popup');
    helpers.handleConfigs(configs);
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
document.querySelector("#go-to-options").addEventListener("click", function () {
    if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
    } else {
        window.open(chrome.runtime.getURL("options.html"));
    }
});
// Click on save button
document.getElementById("save_btn").addEventListener("click", function (e) {
    helpers.saveChanges();
});