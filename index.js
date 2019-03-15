function heyJude() {
  return "Na na na na na na na, na na na na, hey Jude.".repeat(16);
}

function prohibitedLanguage(str) {
  let bannedWords = /candycorn|brusselssprouts/;
  return str.search(bannedWords);
}
