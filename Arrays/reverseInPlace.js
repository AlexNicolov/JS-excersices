function reverceInPlace(array) {

        for (let i = 0; i < array.length / 2; i++) {
                let lastIndex = array.length - 1 - i;
                let temp = array[i]; 
                array[i] = array[lastIndex];
                array[lastIndex] = temp;
        }
        console.log(array.join(' '));
}

reverceInPlace(['a', 'b', 'c', 'd', 'e']);
reverceInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reverceInPlace(['33', '123', '0', 'dd']);