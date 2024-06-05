let a = new Set([1, 2, 3]);
let b = new Set([3, 4]);

let union = new Set([...a, ...b]);

console.log(union); // Set(4) {1, 2, 3, 4}


