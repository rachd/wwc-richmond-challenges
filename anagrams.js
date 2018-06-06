const fs = require("fs");

function anagrams(letters, wordSoFar) {
	if (letters.length === 0) {
		return [wordSoFar];
	}
	let words = [];
	for (let letter of letters) {
		words = [...words, ...anagrams(
			letters.filter(l => l !== letter), wordSoFar + letter
		)];
	}
	return words;

}

function prepareWord(word) {
	return [...word];
}

function prepareDictionary() {
	let data = '';

	const readStream = fs.createReadStream('words_alpha.txt', 'utf8');

	readStream.on('data', function(chunk) {  
		data += chunk;
	}).on('end', function() {
		const dictionary = data.split("\r\n");
		return (dictionary.slice(0, 20));
	});
}

function findAnagrams(word) {
	const dictionary = prepareDictionary();
	return anagrams(prepareWord(word), "");
}
// console.log(anagrams(["c", "a", "r", "t", "o", "g", "r", "a", "p", "h", "y"], ""));
console.log(findAnagrams("cat"));