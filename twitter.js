var userName = JSON.parse(document.querySelector("#init-data").value).screenName;

var customStyles = [
  '[data-element-term="follower_stats"] > .ProfileCardStats-statValue { visibility: visible !important; }',
  '[data-nav="followers"] > .ProfileNav-value { visibility: visible !important; }',
  '.ProfileCardStats-statLink[href="/' + userName + '/followers"] > .ProfileCardStats-statValue { visibility: hidden !important; }',
  '[data-nav="followers"][href="/followers"] > .ProfileNav-value { visibility: hidden !important; }'
].join('\n');

var styles = document.createElement('style');
styles.appendChild(document.createTextNode(customStyles));

document.head.appendChild(styles);
console.log(userName);
