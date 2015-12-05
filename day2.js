'use strict';

const fs = require('fs');

const calculateGiftSurfaceArea = (l, w, h) => {
	const side1 = l * w;
	const side2 = w * h;
	const side3 = h * l;

	const slack = Math.min(side1, side2, side3);

	return (2 * (side1 + side2 + side3)) + slack;
}

const calculateRibbon = (l, w, h) => {
	const face1perimeter = 2 * l + 2 * w;
	const face2perimeter = 2 * w + 2 * h;
	const face3perimeter = 2 * h + 2 * l;

	const smallestPerimeter = Math.min(face1perimeter, face2perimeter, face3perimeter);
	const ribbon = l * w * h;

	return smallestPerimeter + ribbon;
}

fs.readFile('day2-input.txt', 'utf8', (err, data) => {
	let lines = data.match(/[^\r\n]+/g);
	let totalSurfaceArea = 0;
	let totalRibbon = 0;

	for (let line of lines) {
		let parts = line.match(/^([0-9]+)x([0-9]+)x([0-9]+)$/);

		totalSurfaceArea += calculateGiftSurfaceArea(parts[1], parts[2], parts[3]);
		totalRibbon += calculateRibbon(parts[1], parts[2], parts[3]);
	}

	console.log(`Total surface area: ${totalSurfaceArea}`);
	console.log(`Total ribbon: ${totalRibbon}`);
});
