function heyJude(verse) {
	return verse.repeat(16);
}

function prohibitedLanguage(username) {
	const badWords = /candycorn|brusselssprouts/;
	return username.search(badWords);
}
