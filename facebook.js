var loc = window.location.pathname.split('/')[1];
chrome.storage.sync.get(function(items) {
  if (items.facebook !== loc) {
    var styleHTML = '<link rel="stylesheet" type="text/css" href="' + chrome.runtime.getURL("facebook_show.css") + '">'
    document.head.insertAdjacentHTML('beforeend', styleHTML);
  }
});
