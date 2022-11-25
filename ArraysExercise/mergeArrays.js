function mergeArrays(arrayOne, arrayTwo) {
    let arrayThree = [];
    for (let i = 0; i < arrayOne.length; i++) {
       if (i % 2 === 0) {
arrayThree.push(Number(arrayOne[i]) + Number(arrayTwo[i]));
       }else{
           arrayThree.push(`${arrayOne[i]}${arrayTwo[i]}`);
       }
    }
  console.log(arrayThree.join(" - "));      
}

mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);
mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']);