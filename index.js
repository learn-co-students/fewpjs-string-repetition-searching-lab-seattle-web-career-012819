const verse = "Na na na na na na na, na na na na, hey Jude."
function heyJude() {
    return (new Array(17)).join(verse);
}

function prohibitedLanguage(username) {
  let myRegExp = /candycorn|brusselssprouts/;
  return username.search(myRegExp);
}
