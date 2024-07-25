const calculateNumber = require("./1-calcul.js");
const assert = require("assert")

var result = 0;

describe("calculateNumber", function() {
  it("checks equality", function() {
    assert.equal(calculateNumber(4.5, 5.5, "SUM"), 11);
  });

  it("checks equality", function() {
    assert.equal(calculateNumber(-2.5, -3.5, "SUM"), -5);
  });

  it("checks equality", function() {
    assert.equal(calculateNumber(1.0, 5.5, "SUBTRACT"), 5);
  });

  it("checks equality", function() {
    assert.equal(calculateNumber(1.5, 5.5, "SUBTRACT"), 4);
  });

  it("checks equality", function() {
    assert.equal(calculateNumber(-4.5, 5.0, "SUBTRACT"), 9);
  });

  it("checks equality", function() {
    assert.equal(calculateNumber(10, 5, "DIVIDE"), 2);
  });

  it("checks equality", function() {
   assert.equal(calculateNumber(1.0, 0.4, "DIVIDE"), "Error");
  });


  it("checks equality", function() {
   assert.equal(calculateNumber(4.4999999, 0.5, "DIVIDE"), 4);
  });

  it("checks equality", function() {
    assert.equal(calculateNumber(5.6, 1.7, "DIVIDE"), 3);
  });

  it("checks equality", function() {
    assert.equal(calculateNumber(1.0, 0, "DIVIDE"), "Error");
  });

});
