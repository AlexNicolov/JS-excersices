function fizzBuzz(input) {
    for (let z = 1; z <= input; z++) {
        if (z % 3 == 0 & z % 5 == 0) {
            console.log('fizzBuzz')
        } else if (z % 3 == 0) {
            console.log('Fizz')
        } else if (z % 5 == 0) {
            console.log('Buzz')
        } else {
            console.log(z)
        }
    }
}

fizzBuzz('15')