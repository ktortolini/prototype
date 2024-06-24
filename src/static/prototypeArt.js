/**
 * @author ktortolini
 *
 * @name ~PrototypeArt~
 * @date on 06/06/2024
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

	canvas.parent('prototypeArt');

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

/**
 * This function is triggered when the user presses the mouse button down
 * @name mousePressed
 * @summary Add a line with a gradient using two colors
 */

function mousePressed() {
    for (let i = 0; i < 10; i++) {
        drawRandomGradientLine();
    }
}

/**
 * This function is triggered when the user moves the mouse while holding down the mouse button
 * @name mouseDragged
 * @summary Add a line with a gradient using two colors
 */

function mouseDragged() {
    for (let i = 0; i < 10; i++) {
        drawRandomGradientLine();
    }
}

function draw() {
	/**
	 * The draw function is left empty since lines are
	 * drawn in the mousePressed and mouseDragged functions
	 */

}
