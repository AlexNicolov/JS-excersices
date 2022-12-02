function calculator(number1, operator, number2) {
    let sum = 0;
    switch (operator) {
        case "+":
            sum = number1 + number2;
            console.log(sum.toFixed(2));
            break;
        case "-":
            sum = number1 - number2;
            console.log(sum.toFixed(2));
            break;
        case "*":
            sum = number1 * number2;
            console.log(sum.toFixed(2));
            break;
        case "/":
            sum = number1 / number2;
            console.log(sum.toFixed(2));
            break;
        default:
            break;
    }
}

calculator(5, '+', 10)
calculator(25.5, '-', 3)