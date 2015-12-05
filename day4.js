'use strict';

const md5 = require('md5');
const fs = require('fs');

let findHash = (key, numberOfZeroes) => {
	let toMatch = '0'.repeat(numberOfZeroes);

	for (let i = 1; true; i++) {
		if (md5(key + i).substring(0, numberOfZeroes) == toMatch) {
			return i;
		}
	}
};

fs.readFile('day4-input.txt', 'utf8', function (err, key) {
	console.log(`Found hash with 5 zeroes at ${findHash(key, 5)}`);
	console.log(`Found hash with 6 zeroes at ${findHash(key, 6)}`);
});
