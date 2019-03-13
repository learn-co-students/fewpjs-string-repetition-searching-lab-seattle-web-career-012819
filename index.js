// Code your solution here
let heyJude = function (verse) {
  return verse.repeat(16)
}

let prohibitedLanguage = function (string) {
  let bannedWords = /candycorn|brusselssprouts/;
  return string.search(bannedWords);
}
