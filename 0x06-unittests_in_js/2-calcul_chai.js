function calculateNumber (type, a, b) {
	if (type === 'SUM') {
		const sum = Math.round(a) + Math.round(b);
		return sum;
	}
	else if (type === 'SUBTRACT') {
		const sub = Math.round(a) - Math.round(b);
		return sub;
	}
	else if (type === 'DIVIDE') {
		const roundedA = Math.round(a);
		const roundedB = Math.round(b);
		if (roundedB === 0) {
			return "Error";
		}
		const div = roundedA / roundedB;
		return div;
	}
}

module.exports = calculateNumber;
