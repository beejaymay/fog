chrome.storage.sync.get(function(items) {
  if (false) { //make this clever
    var styleHTML = '<link rel="stylesheet" type="text/css" href="' + chrome.runtime.getURL("twitter_show.css") + '">'
    document.head.insertAdjacentHTML('beforeend', styleHTML);
  }
});
