function solve(n) {
    for (let i = 1; i <= n; i++) {
        let k = i + 0;
        if (k % 3 == 0 && k % 5 == 0) {
            k = "FizzBuzz";
        } else if (k % 3 == 0) {
            k = "Fizz";
        } else if (k % 5 == 0) {
            k = "Buzz";
        }
        console.log(k);
    }
}



solve(15)