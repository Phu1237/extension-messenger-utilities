let debug = false; // README: Debug - true | false

if (debug == true) {
  console.log('All storage items:');
  chrome.storage.sync.get(null, function (result) {
    console.log(result);
  });
}
