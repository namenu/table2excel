chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript({file: 'content.js'}, function () {
    console.log('loaded?');
  });
});
