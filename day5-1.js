'use strict';

const fs = require('fs');

let hasThreeVowels = (str) => {
	let numberOfVowels = 0;
	let vowels = ['a', 'e', 'i', 'o', 'u'];

	for (let character of str) {
		if (vowels.indexOf(character) > -1) {
			numberOfVowels++;
		}

		if (3 === numberOfVowels) {
			return true;
		}
	}

	return false;
}


let hasRepeatingLetter = (str) => {
	let previous = "";

	for (let character of str) {
		if (previous === character) {
			return true;
		}

		previous = character;
	}

	return false;
}


let hasForbiddenString = (str) => {
	let forbidden = ['ab', 'cd', 'pq', 'xy'];

	for (let forbiddenStr of forbidden) {
		if (str.indexOf(forbiddenStr) > -1) {
			return true;
		}
	}

	return false;
}

let naughtyOrNice = (str) => {
	return hasThreeVowels(str) && hasRepeatingLetter(str) && !hasForbiddenString(str);
}

fs.readFile('day5-input.txt', 'utf8', function (err, data) {
	let lines = data.match(/[^\r\n]+/g);
	let nice = lines.filter(naughtyOrNice).length;

	console.log(`Nice strings: ${nice}`);
});