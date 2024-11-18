const calculateNumber = require('./1-calcul.js');
const assert = require("assert");

describe("calculateNumber", () => {
	describe("addition", () => {
		it("should return sum of two numbers after rounding them", () => {
			assert.equal(calculateNumber("SUM", 2, 2.1), 4);
		});
		it("should return 5 after adding", () => {
			assert.equal(calculateNumber("SUM", 2.5, 2.4), 5);
		});
	});
	describe("subtraction", () => {
		it("should return subtraction of two numbers", () => {
			assert.equal(calculateNumber("SUBTRACT", 4, 2), 2);
		});
		it("should return result after subtracting rounded nums", () => {
			assert.equal(calculateNumber("SUBTRACT", 2.1, 1.7), 0);
		});
	});
	describe("divide", () => {
		it("should divide two numbers", () => {
			assert.equal(calculateNumber("DIVIDE", 2, 0), "Error");
		});
		it("should divide numbers normally", () => {
			assert.equal(calculateNumber("DIVIDE", 4.1, 1), 4);
		});
	});
});
