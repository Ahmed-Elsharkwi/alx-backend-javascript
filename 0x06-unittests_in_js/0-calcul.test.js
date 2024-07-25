const sum = require("./0-calcul.js");
const assert = require("assert")

var result = 0;

result = sum(4.5, 5.5);
assert( result == 11)

result = sum(-1.5, -2.5);
assert( result == -3);

result = sum(9, 5);
assert( result == 14)

result = sum(1.5, 5)
assert ( result == 7)


result = sum(2, 5.5)
assert (result == 8)
