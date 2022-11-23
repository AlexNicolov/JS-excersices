function solve(array) {
let k = array.shift();
let firstK = array.slice(0, k);
let lastK = array.slice(-k);

console.log(firstK.join(' '));
console.log(lastK.join(' '));
}

solve([2, 7, 8, 9]) 
solve([3, 7, 3, 5, 8, 1])