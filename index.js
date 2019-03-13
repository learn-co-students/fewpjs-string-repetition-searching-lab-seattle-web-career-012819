function heyJude(verse) {
    return verse.repeat(16);
}

function prohibitedLanguage(str) {
    if (str.search("candycorn") != -1 ) {
        return str.search("candycorn");
    } else if (str.search("brusselssprouts") != -1) {
        return str.search("brusselssprouts");
    } else {
        return -1;
    }
}