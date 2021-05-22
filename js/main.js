import move from "./move.js";
import plot from './plot.js';

const x = document.getElementById("x");
const y = document.getElementById("y");
const WIDTH_DIV = 500;
const HEIGHT_DIV = 500;
const div = document.getElementById("to-move");
const containerGraph = document.getElementById('graph');
const viewHeight = document.getElementById("view-height");
const viewWidth = document.getElementById("view-width");

function configure() {
	div.style = `
	width: ${WIDTH_DIV}px;
	height: ${HEIGHT_DIV}px;
	`;
}

configure();
window.onload = () => {
	plot.init();
	move.init(WIDTH_DIV, HEIGHT_DIV, x, y, div, viewHeight, viewWidth, containerGraph);
}
