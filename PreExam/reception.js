function reception(input) {
    let employee1 = Number(input[0]);
    let employee2 = Number(input[1]);
    let employee3 = Number(input[2]);
    let efficiency = employee1 + employee2 + employee3;
    let students = Number(input[3]);
    let time = 0;

    while (students > 0 ) {
        time++;
        if (time % 4 !== 0) {
            students -= efficiency;  
        }
    }
console.log(`Time needed: ${time}h.`);
}

reception(['5','6','4','20']);
reception(['1','2','3','45']);
reception(['3','2','5','40']);
reception([1, 1, 1, 9])