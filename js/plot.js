import Order from './order.js';
const matriz = document.getElementById('graph');

class Ploter {
	constructor(height, index) {
		this.height = height; 
		this.index = index;
	}

	create() {
		const container = document.createElement('span');
		container.classList.add('rect');
		container.style.left = `${this.index * 10}px`;
		container.style.height = `${this.height}px`;

		this.element = container;
	}

	put() {
		matriz.appendChild(this.element);
	}
}

let cacheArray = []

function init(array) {
	cacheArray = array;
	array.forEach((item, i) => {
		setTimeout(() => {
			const plot = new Ploter(item.h, item.p);
			plot.create()
			plot.put();
		}, 50 * i);
	});
}

function reset(newArray) {
	matriz.innerHTML = null;
	cacheArray = newArray;
	newArray.forEach((item, i) => {
		setTimeout(() => {
			const plot = new Ploter(item.h, item.p);
			plot.create()
			plot.put();
		}, 50 * i);
	});
}

function order(dir) {
	const o = new Order(cacheArray);
	const a = o.order(dir);
	reset(a);
}

export default {
	init,
	reset,
	order
};
