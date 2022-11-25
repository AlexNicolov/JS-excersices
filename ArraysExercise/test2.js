function threeBiggest(arr) {
    let biggestTRIArr = [];
        let oddNum = 0;
    for(let i = 0; i < arr.length; i++){
        arr[i] = Number(arr[i]);
    }
    for ( let num of arr){
        if(num % 2 !== 0){
             oddNum += num;
            }
    }
    
    
    }
    threeBiggest([0,1,2,3,4,5,6,7,8,9,10])