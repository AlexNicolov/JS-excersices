function solve(age) {
    if (age >= 0 && age <= 2) {
        console.log("baby");
    } else if (age > 2 && age <= 13) {
        console.log("child");
    } else if (age > 13 && age <= 19) {
        console.log("teenager");
    } else if (age > 19 && age < 66) {
        console.log("adult");
    } else if (age >= 66) {
        console.log("elder");
    } else {
        console.log("out of bounds");
    }
}

solve(1);
solve(11);
solve(111);
solve(41);
solve(12);
solve(66.1);
solve(-1);
