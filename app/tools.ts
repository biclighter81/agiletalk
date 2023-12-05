
export function userId() {
	let uuid = '';
	for (let i=0; i<28; i++) {
		let random = Math.random() * 16 | 0;
		if (i === 8 || i === 12 || i === 16 || i === 20) {
			uuid += '-';
		}
		uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
	}
	return uuid;
}
export function roomId() {
	let id = '';
	for (let i=0; i<22; i++) {
		let random = Math.random() * 16 | 0;
		if (i === 8 || i === 12 || i === 16 || i === 20) {
			id += '-';
		}
		id += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
	}
	return id;
}


//TODO mit Buchstaben erweitern
export function roomKey() {
	let key = '';
	for (let i=0; i<22; i++) {
		let random = Math.random() * 16 | 0;
		if (i === 8 || i === 12 || i === 16 || i === 20) {
			key += '-';
		}
		key += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
	}
	return key;
}
