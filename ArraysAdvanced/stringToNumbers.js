let numsAssString = ['5', '3', '14', '-2', '8'];

let r1 = numsAssString.map(x => Number(x));
let r2 = mapToNumber(numsAssString);

console.log(r1, r2);
console.log(r2);

function mapToNumber(arr) {
let result = [];

for (let element of arr){
    result.push(Number(element));
}
return result;
}