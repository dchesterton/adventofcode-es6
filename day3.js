'use strict';

const fs = require('fs');

class Santa {
	constructor() {
		this.x = 0;
		this.y = 0;
	}

	move(c) {
		switch (c) {
			case '^':
				this.y++;
				break;
			case 'v':
				this.y--;
				break;
			case '>':
				this.x++;
				break;
			case '<':
				this.x--;
				break;
		}

		return `${this.x},${this.y}`;
	}
}

const moveSantaAndRoboSanta = (data) => {
	let visited = new Set(['0,0']);

	let humanSanta = new Santa;
	let roboSanta = new Santa;

	let i = 0;

	for (let c of data) {
		visited.add((i % 2)? roboSanta.move(c): humanSanta.move(c));
		i++;
	}

	return visited.size;
};

const moveSanta = (data) => {
	let visited = new Set(['0,0']);
	let santa = new Santa;

	for (let c of data) {
		visited.add(santa.move(c));
	}

	return visited.size;
};

fs.readFile('day3-input.txt', 'utf8', (err, data) => {
	console.log(`Santa: ${moveSanta(data)}`);
	console.log(`Santa and Robo Santa: ${moveSantaAndRoboSanta(data)}`);
});
