function sorting(array) {

array = array.sort((a, b) => b - a);
let newArray = [];
while (array.length > 0) {
let biggerNum = array.shift();
newArray.push(biggerNum);
let smallerNum = array.pop();
newArray.push(smallerNum);    
}
console.log(newArray.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);