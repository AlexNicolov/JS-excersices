function bombSpecNumbers(array, bomb) {
    let bombNumber = bomb[0];
    let bombRadius = bomb[1];
    let indexOfBomb = array.indexOf(bombNumber);
    
    while (indexOfBomb !== -1) {
    let startExplosionIndex = Math.max(0, indexOfBomb - bombRadius);
    console.log(startExplosionIndex);  
    let explosionLenght = bombRadius * 2 + 1;
    array.splice(startExplosionIndex, explosionLenght);
    indexOfBomb = array.indexOf(bombNumber);
    }
    let sum = 0;
    for(let number of array){
        sum += number;
    }
// let sum = array.reduce((a, b) => a + b, 0);
console.log(sum);
}

bombSpecNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// bombSpecNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);