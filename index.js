function heyJude(str, num=1) {
  return str.repeat(num);
};

function prohibitedLanguage(str) {
  let bannedUsers = /candycorn|brusselssprouts/;
  return str.search(bannedUsers);
}
