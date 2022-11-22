function evenAndOddSubtraction(array) {
    let evenNum = 0;
    let oddNum = 0;
    for (let i = 0; i < array.length; i++) {
        array[i] = Number(array[i]);
    }
    for (let num of array) {
        if (num % 2 == 0) {
            evenNum += num;
        } else {
            oddNum += num;
        }
    }
    console.log(evenNum - oddNum);
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9]);