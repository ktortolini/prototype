/**
 * @author ktortolini
 *
 * @name ~DeliverableArt~
 * @date on 06/23/2024
 */

const totalIterations = 120;
const randomDeviation = 0.07;

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

	/**
	 * Adds the current canvas to the deliverable art HTML element,
	 * see: {@link https://p5js.org/reference/#/p5.Element/parent}
	 */

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
		/**
		 * This application uses p5.js and p5 noFill() method,
		 * see: {@link https://p5js.org/reference/#/p5/noFill}
		 */

		noFill();

		/**
		 * This application uses p5.js and p5 beginShape() method,
		 * see: {@link https://p5js.org/reference/#/p5/beginShape}
		 */

		beginShape();

		/**
		 * This application uses p5.js and p5 vertex() method,
		 * see: {@link https://p5js.org/reference/#/p5/vertex}
		 */

		vertex(vertX, vertY);

		/**
		 * Adds a random deviation to the control points,
		 * see: {@link https://p5js.org/reference/#/p5/random}
		 */

		for (let i = 0; i < controlPoints.length; i++) {
			const cPoint1X = vertX + random(
				(controlPoints[i][0]) - (0.07 + randomDeviation),
				(controlPoints[i][0]) + (0.07 + randomDeviation),
			);
			const cPoint1Y = vertY + random(
				(controlPoints[i][1]) - (0.26 + randomDeviation),
				(controlPoints[i][1]) + (0.26 + randomDeviation),
			);
			const cPoint2X = vertX + random(
				(controlPoints[i][2]) - (0.52 + randomDeviation),
				(controlPoints[i][2]) + (0.52 + randomDeviation),
			);
			const cPoint2Y = vertY + random(
				(controlPoints[i][3]) - (0.52 + randomDeviation),
				(controlPoints[i][3]) + (0.52 + randomDeviation),
			);
			const endPointX = vertX + random(
				(controlPoints[i][4]) - (0.26 + randomDeviation),
				(controlPoints[i][4]) + (0.26 + randomDeviation),
			);
			const endPointY = vertY + random(
				(controlPoints[i][5]) - (0.07 + randomDeviation),
				(controlPoints[i][5]) + (0.07 + randomDeviation),
			);

			/**
			 * This application uses p5.js and p5 bezierVertex() method,
			 * see: {@link https://p5js.org/reference/#/p5/bezierVertex}
			 */

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

			/**/
		}

		endShape(CLOSE);
	}

	/**
	 * Adds the smallFootprint() method that creates custom shape.
	 */

	smallFootprint() {
		this.CustomBezierShape(this.customX, this.customY, [
			[-4.0351, -2.4946, 0.4248, -7.4175, -0.7657, -10.8786],
			[-3.91, -5.958, -2.062, -14.712, 6.55, -11.757],
			[5.4112, 2.0784, 1.3328, 8.1257, 0.7687, 11.9033],
			[2.1897, 5.5893, 1.0302, 12.8117, -6.5534, 10.732],
		]);
	}
}

/**
 * This piece of art makes use of the lerpColor() method, and creates
 * a small line that has a two color gradient, for more information
 * see: {@link https://p5js.org/examples/color-linear-gradient.html}
 * @name setGradientTwoColors
 * @summary Add a line of two colors when a user clicks on the canvas
 */

function drawRandomGradientLine(x, y) {
	/**
	 * This application uses p5.js and p5 random() method,
	 * see: {@link https://p5js.org/reference/#/p5/random}
	 */

	const length = random(1, 16);

	/**
	 * This application uses p5.js and p5 int() method,
	 * see: {@link https://p5js.org/reference/#/p5/int}
	 */

	const colorStartIndex = int(random(colorArray.length));

	/**
	 * This application uses p5.js and p5 int() method,
	 * see: {@link https://p5js.org/reference/#/p5/int}
	 */

	const colorEndIndex = int(random(colorArray.length));

	/**
	 * Retrieve the starting and ending colors from the colorArray
	 */

	let colorStart = colorArray[colorStartIndex];
	let colorEnd = colorArray[colorEndIndex];

	/**
	 * Apply a random tint by modifying the RGB values
	 */

	colorStart = colorStart.map((c) => max(0, min(255, c + random(-75, 75))));
	colorEnd = colorEnd.map((c) => max(0, min(255, c + random(-75, 75))));

	/**
	 * Convert arrays back to p5 Color objects
	 */

	const p5ColorStart = color(...colorStart);
	const p5ColorEnd = color(...colorEnd);

	/**/

	let endX, endY;

	/**/

	const direction = random([0, 90, 180, 270]);

	/**
	 * Adds a random direction to the custom shape
	 */

	for (let i = 0; i <= length; i++) {
		const offsetX = random(-12, 12);
		const offsetY = random(-12, 12);
		const startX = x + offsetX;
		const startY = y + offsetY;

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

		/**
		 * This application uses p5.js and p5 map() method,
		 * see: {@link https://p5js.org/reference/#/p5/map}
		 */

		let interpolation = map(i, 0, length, 0, 1);

		/**
		 * This application uses p5.js and p5 lerpColor() method,
		 * see: {@link https://p5js.org/reference/#/p5/lerpColor}
		 */

		let gradientColor = lerpColor(p5ColorStart, p5ColorEnd, interpolation);

		/**/

		stroke(gradientColor);

		/**/

		line(startX, startY, endX, endY);
	}
}

/**
 * This piece of art makes use of the drawLinesInShape() method, and creates
 * a custom shape with a clipping mask that fills the shape with gradient lines.
 * @name drawLinesInShape
 * @summary Create a custom shape with gradient lines
 */

function drawLinesInShape(x, y) {

	/**/

	let shape = new CustomShape(x, y);
	shape.smallFootprint();

	/**
	 * This application uses p5.js and p5 clip() method,
	 * see: {@link https://p5js.org/reference/#/p5/clip}
	 */

	drawingContext.clip();

	/**
	 * Adds a for loop that iterates over {@link drawRandomGradientLine}
	 */

	for (let i = 0; i < 10; i++) {
		drawRandomGradientLine(x, y);
	}

	/**/

	beginShape();

	/**/

	shape.CustomBezierShape(x, y, [
		[-4.0351, -2.4946, 0.4248, -7.4175, -0.7657, -10.8786],
		[-3.91, -5.958, -2.062, -14.712, 6.55, -11.757],
		[5.4112, 2.0784, 1.3328, 8.1257, 0.7687, 11.9033],
		[2.1897, 5.5893, 1.0302, 12.8117, -6.5534, 10.732],
	]);

	/**
	 * This application uses p5.js and p5 endShape() method,
	 * see: {@link https://p5js.org/reference/#/p5/endShape}
	 */

	endShape(CLOSE);

	/**
	 * This application uses p5.js and p5 clip() method,
	 * see: {@link https://p5js.org/reference/#/p5/clip}
	 */

	drawingContext.clip();

	/**
	 * Clear outside the clipping path by redrawing the background
	 */

	background(0);

	/**/

	shape.smallFootprint();
}

function draw() {
	
	/**
	 * Adds a for loop that iterates over {@link drawLinesInShape}
	 * while also changing the X and Y position to mimic footprints
	 */

	for (let step = 0; step < totalIterations; step++) {

		/**/

		let stepX = random(width); 
		let stepY = height - step * random(10, 20);

		/**/

		push();

		/**/

		drawLinesInShape(stepX, stepY);

		/**/

		pop();
	}

	/**/
}
