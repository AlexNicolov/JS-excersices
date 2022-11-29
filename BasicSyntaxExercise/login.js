function login(input) {
    let count = 0;
    for (let index = 1; index < input.length; index++) {
        if (input[0] === input[index].split("").reverse().join("")) {
            console.log(`User ${input[0]} logged in.`);
        } else {
            if (count === 3) {
                console.log(`User ${input[0]} blocked!`);
                break;
            } else {
                console.log("Incorrect password. Try again.");
            }
        }
        count++;
    }
}


login(['Acer', 'login', 'go', 'let me in', 'do', 'cho', 'recA'])
login(['momo', 'omom'])
login(['sunny', 'rainy', 'cloudy', 'sunny', 'go', 'ynnus'])