const matriz = document.getElementById('graph');

const data = Array(50).fill(0).map((_, index) => ({
	p: index,
	h: 10 + Math.floor(Math.random() * 350),
}));

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

function init() {
	data.forEach((item, i) => {
		setTimeout(() => {
			const plot = new Ploter(item.h, item.p);
			plot.create()
			plot.put();
		}, 50 * i);
	});
}

export default {
	init,
};
