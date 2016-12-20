function save_options() {
  var twitter = document.getElementById('twitter').value;
  var facebook = document.getElementById('facebook').value;

  chrome.storage.sync.set({
    twitter: twitter,
    facebook: facebook
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {

  chrome.storage.sync.get(function(items) {
    document.getElementById('twitter').value = items.twitter;
    document.getElementById('facebook').value = items.facebook;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
