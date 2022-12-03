function addAndSubtract(num1, num2, num3) {
    function add(firstNumber, secondNumber) {
        return num1 + num2;
    }
    let substract = (addResult, thirdNumber) => addResult - thirdNumber;
    let result = add(num1, num2);
    let finalResult = substract(result, num3);
    console.log(finalResult);
}
addAndSubtract(23, 6, 10)
addAndSubtract(1, 17, 30)