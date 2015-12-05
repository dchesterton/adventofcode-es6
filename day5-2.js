'use strict';

const fs = require('fs');

let stringAppearsTwice = (str) => {
	let pairs = [];

	for (let i = 2, len = str.length; i < len - 1; i++) {
		pairs.push(str[i - 2] + str[i - 1]);

		let nextTuple = str[i] + str[i + 1];

		if (pairs.indexOf(nextTuple) > -1) {
			return true;
		}
	}

	return false;
}

let hasRepeatingLetter = (str) => {
	for (let i = 2, len = str.length; i < len; i++) {
		if (str[i] === str[i - 2]) {
			return true;
		}
	}

	return false;
}

let naughtyOrNice = (str) => {
	return stringAppearsTwice(str) && hasRepeatingLetter(str);
}

fs.readFile('day5-input.txt', 'utf8', function (err, data) {
	let lines = data.match(/[^\r\n]+/g);
	let nice = lines.filter(naughtyOrNice).length;

	console.log(`Nice strings: ${nice}`);
});