const calculateNumber = require("./0-calcul.js");
const assert = require("assert")

var result = 0;

describe("calculateNumber", function() {
  it("checks equality", function() {
    assert.equal(calculateNumber(4.5, 5.5), 11);
  });

  it("checks equality", function() {
    assert.equal(calculateNumber(-2.5, -3.5), -5);
  });

  it("checks equality", function() {
    assert.equal(calculateNumber(1.5, 5), 7);
  });

  it("checks equality", function() {
    assert.equal(calculateNumber(4.5, 5), 10);
  });

  it("checks equality", function() {
    assert.equal(calculateNumber(4, 5), 9);
  });


});
