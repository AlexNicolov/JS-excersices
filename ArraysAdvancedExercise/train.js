function train(train) {
    let passengerInWagons = train.shift().split(" ").map(Number);
    let maxCapacity = Number(train.shift());
    for (const command of train) {
        let curComand = command.split(" ");
        if(curComand[0] === "Add") {
            passengerInWagons.push(Number(curComand[1]));
        }else{
            for(let index = 0; index < passengerInWagons.length; index++) {
                if(passengerInWagons[index] + Number(curComand[0]) <=maxCapacity){
                    passengerInWagons[index] += Number(curComand[0]);
                    break; 
                }
            }
        }
    }
console.log(passengerInWagons.join(" "));

}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6'])