import { helpers } from './global'

console.group('All storage items');
chrome.storage.sync.get(null, function (result) {
    helpers.log(result);
    console.groupEnd();
});
