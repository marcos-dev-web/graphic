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
const buttonOrder = document.getElementById("order");
const buttonRegenerate = document.getElementById("regenerate");
const select = document.getElementById('direction');

function configure() {
	div.style = `
	width: ${WIDTH_DIV}px;
	height: ${HEIGHT_DIV}px;
	`;
}

configure();

window.onload = () => {
	const data = Array(50).fill(0).map((_, index) => ({
		p: index,
		h: 10 + Math.floor(Math.random() * 350),
	}));

	plot.init(data);
	move.init(WIDTH_DIV, HEIGHT_DIV, x, y, div, viewHeight, viewWidth, containerGraph);
}

const order = () => {
	const dir = select.value;
	plot.order(dir)
}

const regenerate = () => {
	const data = Array(50).fill(0).map((_, index) => ({
		p: index,
		h: 10 + Math.floor(Math.random() * 350),
	}));
	plot.reset(data);
}

buttonRegenerate.addEventListener('click', regenerate);
buttonOrder.addEventListener('click', order)
