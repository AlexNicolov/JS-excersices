function addAndSubstract(arr) {
// let myArr = arr;
let sumOfOriginalArray = 0;
let modifiedArraySum = 0;

for (let index = 0; index < arr.length; index++) {
    sumOfOriginalArray += arr[index];
    if (arr[index] % 2 === 0) {
        arr[index] += index;
    }else{
        arr[index] -= index;
    }
modifiedArraySum += arr[index];
}

console.log(arr.join(' '));
console.log(sumOfOriginalArray);
console.log(modifiedArraySum);
}

addAndSubstract([5, 15, 23, 56, 35]);
addAndSubstract([-5, 11, 3, 0, 2]);