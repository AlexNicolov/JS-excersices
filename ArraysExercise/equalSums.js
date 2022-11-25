function equalSums(array) {
    let hasEqualSum = false;
    for (let index = 0; index < array.length; index++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let j = index - 1; j >= 0; j--) {
            leftSum += array[j];
        }
        for (let num = index + 1; num < array.length; num++) {
            rightSum += array[num];
        }
        if (leftSum === rightSum) {
            console.log(index);
            hasEqualSum = true;
        }
    }
    if (!hasEqualSum) {
        console.log('no');

    }
}
equalSums([1, 2, 3, 3]);
