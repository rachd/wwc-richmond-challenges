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
console.log(anagrams(["c", "a", "r", "t", "o", "g", "r", "a", "p", "h", "y"], ""));
