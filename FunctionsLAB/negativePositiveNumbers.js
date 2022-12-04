function negativePositiveNumbers(input) {
    let result = [];
    for (let element of input) {
        element = Number(element);
        if (element < 0) {
            result.unshift(element)
        }else{
            result.push(element)
        }
    }
        for(let element of result){
        console.log(element);
    }
}

negativePositiveNumbers(['7', '-2', '8', '9']);