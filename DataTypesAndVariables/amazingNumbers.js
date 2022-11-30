function amazingNumbers(num) {
    let result = 0;
    let numAsString = String(num);

    for (let i = 0; i < numAsString.length; i++) {
        result += Number(numAsString[i]);
    }

    let resultAsString = String(result);

    let special = false;

    for (let j = 0; j < resultAsString.length; j++) {
        if (resultAsString[j] == '9') {
            special = true;
        }

    }
    console.log(`${num} Amazing? ${special ? 'True' : 'False'}`);
}

amazingNumbers(1233);
amazingNumbers(999);
// amazingNumbers(240);
// amazingNumbers(982);
