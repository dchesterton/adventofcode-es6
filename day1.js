'use strict';

const fs = require('fs');

let findFloor = (input) => {
	let floor = 0;

	for (let c of input) {
		if ('(' === c) {
			floor++;
		} else {
			floor--;
		}
	}	

	return floor;
}

let findPositionOfBasement = (input) => {
	let floor = 0;
	let i = 0;

	for (let c of input) {
		if ('(' === c) {
			floor++;
		} else {
			floor--;
		}

		if (floor < 0) {
			return i + 1;
		}

		i++;
	}

	return floor;
}

fs.readFile('day1-input.txt', 'utf8', function (err, data) {
	console.log(`Floor: ${findFloor(data)}`);
	console.log(`Position when entering basement: ${findPositionOfBasement(data)}`);
});
