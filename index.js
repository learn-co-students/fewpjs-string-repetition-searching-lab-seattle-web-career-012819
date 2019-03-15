function heyJude (verse) {
  return verse.repeat(16);
}

function prohibitedLanguage(string) {
  const banned = /candycorn|brusselssprouts/;
  return string.search(banned);
}
