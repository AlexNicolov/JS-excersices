function experienceGaining(input) {
    let neededExperience = Number(input[0]);
    let countOfBattles = input[1];
let battleCounter = 0;
    let exp1 = input[2];
    let exp2 = input[3];
    let exp3 = input[4];
    let exp4 = input[5];
    let exp5 = input[6];
    let experience = exp1 + exp2 + exp3 + exp4 + exp5;

    for (let currBattle = 1; currBattle <= countOfBattles; currBattle++) {
        battleCounter ++;
        let currexperience = 0;
        if (currBattle % 3 === 0) {
            experience += exp3 * 0.15;
        } else if (currBattle % 5 === 0) {
            experience -= exp5 * 0.10;
        } else if (currBattle % 15) {
            experience += currexperience * 0.05
        }
    }
        if (experience >= neededExperience) {
            
            console.log(`Player successfully collected his needed experience for ${battleCounter} battles.`);
        } else {
            let difference = Math.abs(neededExperience - experience);
            console.log(`Player was not able to collect the needed experience, ${difference.toFixed(2)} more needed.`);
        
    }
}


experienceGaining([500,
    5,
    50,
    100,
    200,
    100,
    30]);

experienceGaining([500,
    5,
    50,
    100,
    200,
    100,
    20])

experienceGaining([400,
    5,
    50,
    100,
    200,
    100,
    20])    