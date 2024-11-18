const calculateNumber = require("./0-calcul.js");
const assert = require('assert');

describe("calculateNumber", () => {
	it("should return 5 when input is 1.5 and 3", () => {
		assert.equal(calculateNumber(1.5, 3), 5);
	});
	it("should return 4 when input is 1.7 amd 2.1", () => {
		assert.equal(calculateNumber(1.7, 2.1), 4);
	});
	it("should return 4 if input is 2 and 2", () => {
		assert.equal(calculateNumber(2, 2), 4);
	});
});
