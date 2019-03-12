const verse = "Na na na na na na na, na na na na, hey Jude."

function heyJude(verse){
    return verse.repeat(16)
}

function prohibitedLanguage(string) {
 let myRegExp = /candycorn|brusselssprouts/;
 let searchResult = string.search(myRegExp);
 return searchResult;
}
