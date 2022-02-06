chrome.storage.sync.get(null, function (result) {
  console.group('All storage items');
  console.log(result);
  console.groupEnd();
});

chrome.storage.local.get(null, function (result) {
  console.group('All storage items');
  console.log(result);
  console.groupEnd();
});