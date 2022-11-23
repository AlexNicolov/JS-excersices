function processOddNumbers(arr) {
// filter only elements in odd positions
    let filtered = arr.filter((x, i) => i % 2 == 1);

    //double filtered values
let doubled = filtered.map(x => x * 2);

    //reverse resulting array
let result = doubled.reverse();

    //print result
console.log(result.join(' '));
    
//или съкратен вариант

console.log(arr
    .filter((x, i) => i % 2 == 1)
    .map(x => x * 2)
    .reverse()
    .join(' ')
    );
}

    processOddNumbers([10, 15, 20, 25]);
    processOddNumbers([3, 0, 10, 4, 7, 3]);