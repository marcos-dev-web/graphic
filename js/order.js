class Order {
	constructor(list) {
		this.list = list;
	}

	order(direction) {
		function pop(list_, index_) {
			const nl = [];
			for (let i = 0; i < list_.length; i++) {
				if (i !== index_) {
					nl.push(list_[i]);
				}
			}
			return nl;
		}

		let list = [...this.list];
		let orderedList = [];
		let counter = 0;
		let currentIndex = 0;
		let pos = 0;

		while (true) {
			counter = 0;
			while (counter < list.length) {
				if (direction === "tomax") {
					if (list[counter].h < list[currentIndex].h) {
						currentIndex = counter;
						counter = 0;
					}
				}

				if (direction === "tomin") {
					if (list[counter].h > list[currentIndex].h) {
						currentIndex = counter;
						counter = 0;
					}
				}
				counter++;
			}

			orderedList.push({...list[currentIndex], p: pos});
			list = pop(list, currentIndex);
			currentIndex = 0;
			pos++;

			if (list.length === 0) {
				break
			}
		}

		return orderedList;
	}
}

export default Order;
