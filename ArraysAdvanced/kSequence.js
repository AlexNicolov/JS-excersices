function kSequence(n, k) {
    let result = [1];
    for (let index = 0; index < n - 1; index++) {
        let lastK = result.slice(-k);
        let sum = 0;
        for (let element of lastK) {
            sum += element;
        }
        result.push(sum);
    }
    console.log(result.join(' '));
}


kSequence(6, 3);
kSequence(8, 2);
