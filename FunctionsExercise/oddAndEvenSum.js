function oddAndEvenSum(number) {
    let numberAsText = number.toString();
function totalOddSum(numberAsText){
let oddSum = 0;
for (let index = 0; index < numberAsText.length; index++) {
    let currNum = Number(numberAsText[index]);
    if (currNum % 2 !== 0) {
oddSum += currNum;   
    }     
    }
return oddSum;
    }
    function totalEvenSum(numberAsText){
        let evenSum = 0;
        for (let index = 0; index < numberAsText.length; index++) {
            let currNum = Number(numberAsText[index]);
            if (currNum % 2 === 0) {
        evenSum += currNum;        
            }
        }
        return evenSum;
}
console.log(`Odd sum = ${totalOddSum(numberAsText)}, Even sum = ${totalEvenSum(numberAsText)}`);
}




oddAndEvenSum(1000435);
oddAndEvenSum(9843212318674)