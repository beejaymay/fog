var userName = document.querySelector("[data-nav='view_profile']").pathname.substring(1);

var customStyles = [
  '[data-element-term="follower_stats"] > .ProfileCardStats-statValue { visibility: visible !important; }',
  '.ProfileCardStats-statLink[href="/' + userName + '/followers"] > .ProfileCardStats-statValue { visibility: hidden !important; }',
  '[data-nav="followers"] > .ProfileNav-value { visibility: visible !important; }',
  '[data-nav="followers"][href="/followers"] > .ProfileNav-value { visibility: visible !important; }'
].join('\n');

var styles = document.createElement('style');
styles.appendChild(document.createTextNode(customStyles));

document.head.appendChild(styles);
console.log(userName);
