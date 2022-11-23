function equalArray(arr1, arr2) {
    let sum = 0;
    let areEqual = true;
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i]);  
        sum += arr1[i];
    }
  
    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = Number(arr2[i]); 
        let count = 0;
        
    }

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                console.log(i);
            
            }  
        }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        } else {
            console.log(`Arrays are identical. Sum: ${sum}`);
            areEqual = true
            break;
        }
    }
}

}

equalArray(['10', '20', '30'], ['10', '20', '30']);
equalArray(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalArray(['10', '6'], ['10', '5'])