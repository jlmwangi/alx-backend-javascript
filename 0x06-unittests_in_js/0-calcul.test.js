const calculateNumber = require("./0-calcul.js");
const assert = require('assert');

assert.equal(calculateNumber(1.5, 3), 5);
assert.equal(calculateNumber(1.7, 2.1), 4);
assert.equal(calculateNumber(2, 2), 4);
