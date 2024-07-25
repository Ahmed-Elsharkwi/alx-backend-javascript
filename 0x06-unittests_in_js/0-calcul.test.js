const calculateNumber = require("./0-calcul.js");
const assert = require("assert")

var result = 0;

result = calculateNumber(4.5, 5.5);
assert( result == 11)

result = calculateNumber(-1.5, -2.5);
assert( result == -3);

result = calculateNumber(9, 5);
assert( result == 14)

result = calculateNumber(1.5, 5)
assert ( result == 7)


result = calculateNumber(2, 5.5)
assert (result == 8)
