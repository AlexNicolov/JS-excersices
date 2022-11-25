function negativePositive (arr){
let result = [];
for(let num of arr){
    if (num < 0){
        result.unshift(num);
    }else{
        result.push(num);
    }
}
console.log(result.join('\n'));
}

negativePositive([2, -7, 100, -13, 8, -9]) 