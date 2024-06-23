/**
 * @author ktortolini
 *
 * @name ~PrototypeArt~
 * @date on 06/07/2024
 */

const colorArray = [
	[31, 224, 105],
	[224, 31, 150],
	[80, 175, 137],
	[80, 175, 89],
	[197, 82, 58],
	[58, 173, 197],
	[161, 158, 94],
	[94, 161, 158],
	[158, 94, 161],
	[125, 56, 199],
	[151, 96, 210],
];

// deno-lint-ignore no-unused-vars
function setup() {
	/**
	 * This application uses p5.js and p5 createCanvas() method,
	 * see: {@link https://p5js.org/reference/#/p5/createCanvas}
	 */

	const canvas = createCanvas(windowWidth - 10, windowHeight - 20);

	/**/

	canvas.parent('deliverableArt');

	/**
	 * This application uses p5.js and p5 smooth() method,
	 * see: {@link https://p5js.org/reference/#/p5/smooth}
	 */

	smooth(3);

	/**/

	background(0, 0, 0);

	/**/
}

/**
 * This piece of art makes use of the bezierVertex() method, and it
 * creates a custom shape with a random deviation, to read more see
 * this link: {@link https://p5js.org/reference/#/p5/bezierVertex}
 * @name CustomShape
 * @summary Create a custom shape with a random deviation
 */

class CustomShape {
	constructor(paramX, paramY) {
		this.customX = paramX;
		this.customY = paramY;
	}

	CustomBezierShape(vertX, vertY, controlPoints) {
		for (let i = 0; i < controlPoints.length; i++) {
			const cPoint1X = vertX +
				random(
					(controlPoints[i][0]) - (0.07 + randomDeviation),
					(controlPoints[i][0]) + (0.07 + randomDeviation),
				);
			const cPoint1Y = vertY +
				random(
					(controlPoints[i][1]) - (0.26 + randomDeviation),
					(controlPoints[i][1]) + (0.26 + randomDeviation),
				);
			const cPoint2X = vertX +
				random(
					(controlPoints[i][2]) - (0.52 + randomDeviation),
					(controlPoints[i][2]) + (0.52 + randomDeviation),
				);
			const cPoint2Y = vertY +
				random(
					(controlPoints[i][3]) - (0.52 + randomDeviation),
					(controlPoints[i][3]) + (0.52 + randomDeviation),
				);
			const endPointX = vertX +
				random(
					(controlPoints[i][4]) - (0.26 + randomDeviation),
					(controlPoints[i][4]) + (0.26 + randomDeviation),
				);
			const endPointY = vertY +
				random(
					(controlPoints[i][5]) - (0.07 + randomDeviation),
					(controlPoints[i][5]) + (0.07 + randomDeviation),
				);

			/**/

			bezierVertex(
				cPoint1X,
				cPoint1Y,
				cPoint2X,
				cPoint2Y,
				endPointX,
				endPointY,
			);

			/**/

			vertX = endPointX;
			vertY = endPointY;
		}
		return new CustomShape(vertX, vertY);
	}

	smallFootprint() {
		/**/

		beginShape();

		/**/

		const startingX = 3.2192;
		const startingY = 23.7279;

		/**
		 * This application uses p5.js and p5 vertex() method,
		 * see: {@link https://p5js.org/reference/#/p5/vertex}
		 */

		vertex(
			random(startingX, startingX),
			random(startingY, startingY),
		);

		/**/

		let footprint = new CustomShape(startingX, startingY);
		footprint = footprint.CustomBezierShape(
			startingX,
			startingY,
			[
				[-4.0351, -2.4946, 0.4248, -7.4175, -0.7657, -10.8786],
				[-3.91, -5.958, -2.062, -14.712, 6.55, -11.757],
				[5.4112, 2.0784, 1.3328, 8.1257, 0.7687, 11.9033],
				[2.1897, 5.5893, 1.0302, 12.8117, -6.5534, 10.732],
			],
		);

		/**/

		endShape(CLOSE);
	}
}

/**
 * This piece of art makes use of the lerpColor() method, and creates
 * a small line that has a two color gradient, for more information
 * see: {@link https://p5js.org/examples/color-linear-gradient.html}
 * @name setGradientTwoColors
 * @summary Add a line of two colors when a user clicks on the canvas
 */

function drawRandomGradientLine() {
	/**
	 * Add a random length for the lines in the blob
	 */
	const length = random(1, 16);

	/**
	 * Randomly select an index for the starting color from the colorArray
	 */

	const colorStartIndex = int(random(colorArray.length));

	/**
	 * Randomly select an index for the ending color from the colorArray
	 */

	const colorEndIndex = int(random(colorArray.length));

	/**
	 * Retrieve the starting color using the selected index and spread operator to pass RGB values
	 */

	const colorStart = color(...colorArray[colorStartIndex]);

	/**
	 * Retrieve the ending color using the selected index and spread operator to pass RGB values
	 */

	const colorEnd = color(...colorArray[colorEndIndex]);

	/**/

	let endX, endY;
	const direction = random([0, 90, 180, 270]);

	/**/

	for (let i = 0; i <= length; i++) {
		/**
		 * Recalculate offsets for each segment of the line to create continuous change
		 */

		const offsetX = random(-12, 12);
		const offsetY = random(-12, 12);

		/**/

		const startX = mouseX + offsetX;
		const startY = mouseY + offsetY;

		/**/

		switch (direction) {
			case 0:
				endX = startX + 1;
				endY = startY;
				break;
			case 90:
				endX = startX;
				endY = startY + 1;
				break;
			case 180:
				endX = startX - 1;
				endY = startY;
				break;
			case 270:
				endX = startX;
				endY = startY - 1;
				break;
		}

		let interpolation = map(i, 0, length, 0, 1);
		let gradientColor = lerpColor(colorStart, colorEnd, interpolation);

		/**/

		stroke(gradientColor);

		/**/

		line(startX, startY, endX, endY);
	}
}

// Add this new function
function drawLinesInShape() {
	let shape = new CustomShape(0, 0); // Initialize with arbitrary values
	shape.smallFootprint(); // Set up the shape
	for (let i = 0; i < 10; i++) {
		drawRandomGradientLine();
	}
}

// Modify the mousePressed function
function mousePressed() {
	drawLinesInShape();
}

// Modify the mouseDragged function
function mouseDragged() {
	drawLinesInShape();
}

function draw() {
	/**
	 * The draw function is left empty since lines are
	 * drawn in the mousePressed and mouseDragged functions
	 */
}
