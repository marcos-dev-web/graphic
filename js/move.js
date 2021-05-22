let pressed = false;

var div;
var containerGraph;
var viewHeight;
var viewWidth;
var WIDTH;
var HEIGHT;
var x;
var y;

function showHeight(height) {
	height = height - 11;
	viewHeight.style.top = `${height}px`;
	viewHeight.textContent = `${HEIGHT - height - 11}px`;
}

function showWidth(width) {
	width = width + 5;
	viewWidth.style.left = `${width}px`;
	viewWidth.textContent = `${width - 5}px`;
}

const functions = {
	mouseup() {
		pressed = false;
		containerGraph.removeAttribute('style');
	},
	mousedown() {
		div.addEventListener("mouseup", functions.mouseup);
		div.addEventListener("mouseleave", functions.mouseup);
	},
	click() {
		pressed = true;
		functions.mousedown();
	},
	move(e) {
		if (pressed) {
			const cX = e.offsetX;
			const cY = e.offsetY;

			const pX = (cX / HEIGHT) * 100;
			const pY = (cY / WIDTH) * 100;

			if (pY > 0.2 && pX > 0.2) {
				showHeight(cY);
				showWidth(cX);
				containerGraph.style.background = 'rgba(0, 0, 0, 0.3)';

				x.style.top = `${pY}%`;
				y.style.left = `${pX}%`;
			}
		}
	},
};

function init(width, height, xElement, yElement, divElement, viewHeightElement, viewWidthElement, containerGraphElement) {
	containerGraph = containerGraphElement;
	viewHeight = viewHeightElement;
	viewWidth = viewWidthElement;
	div = divElement;
	WIDTH = width;
	HEIGHT = height;
	x = xElement;
	y = yElement;

	div.addEventListener("mousedown", functions.click);
	div.addEventListener("mousemove", functions.move);
}

export default {
	init,
};
