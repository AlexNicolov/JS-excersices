function triangleOfNumbers(num) {
    for (let i = 1; i <= num; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
       line += i;
       if (j !== i) {
           line += " ";
       }
    }
    console.log(line);
    }
}

// function triangleOfNumbers(n) {
//     for (let i = 1; i <= n; i++) {
//         let x = '' + i;
//         console.log(x.repeat(i));
//     }
// }

triangleOfNumbers(7)