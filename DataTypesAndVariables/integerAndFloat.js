function integerAndFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let type = 'Integer';

    /*   let sumAsString = String(sum);
    for (let i = 0; i < sumAsString.length; i++) {
        if (sumAsString[i] == '.') {
            type = 'Float';
    }   */

   /* let roundedSum = Math.round(sum);
    if (sum != roundedSum) {
        type = 'Float';
    }   */

    if(sum % 1 != 0) {
        type = 'Float';
    }


    console.log(`${sum} - ${type}`);
}

integerAndFloat(9, 100, 1.1);
console.log('---');
integerAndFloat(100, 200, 303);