function magicSum(array, magicNumber) {
    for (let index = 0; index < array.length - 1; index++) {
        let currElement = array[index];
        for (let j = index + 1; j < array.length; j++) {
            let nextElement = array[j];
            let sum = currElement + nextElement;
            if (sum === magicNumber) {
                console.log(`${currElement} ${nextElement}`);
            }
        }
    }
}



magicSum([1, 7, 6, 2, 19, 23],
    8);