function arrRotation(arr, rotation) {
    let start = rotation % arr.length;
    let arr2 = [];

    for (let i = start; i < arr.length; i++) {
       arr2.push(arr[i]);    
    }
    if (start > 0){
        for(let i = 0; i< start; i++){
            arr2.push(arr[i])
        }
    }
console.log(arr2.join(' '));
}


arrRotation([51, 47, 32, 61, 21], 2);
arrRotation([32, 21, 61, 1], 4);
arrRotation([2, 4, 15, 31], 5);