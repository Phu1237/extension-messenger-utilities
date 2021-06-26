let debug=!1;1==debug&&(console.log("All storage items:"),chrome.storage.sync.get(null,(function(e){console.log(e)})));
