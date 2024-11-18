const calculateNumber = require('./2-calcul_chai.js');

let expect;

before(async () => {
	({ expect } = await import("chai"));
});

describe("calculateNumber", () => {
  describe("addition", () => {
    it("should return sum of two numbers after rounding them", () => {
      expect(calculateNumber("SUM", 2, 2.1)).to.be.equal(4);
    });
    it("should return 5 after adding", () => {
      expect(calculateNumber("SUM", 2.5, 2.4)).to.be.equal(5);
    });
  });
  describe("subtraction", () => {
    it("should return subtraction of two numbers", () => {
      expect(calculateNumber("SUBTRACT", 4, 2)).to.be.equal(2);
    });
    it("should return result after subtracting rounded nums", () => {
      expect(calculateNumber("SUBTRACT", 2.1, 1.7)).to.be.equal(0);
    });
  });
  describe("divide", () => {
    it("should divide two numbers", () => {
      expect(calculateNumber("DIVIDE", 2, 0)).to.be.equal("Error");
    });
    it("should divide numbers normally", () => {
      expect(calculateNumber("DIVIDE", 4.1, 1)).to.be.equal(4);
    });
  });
});
