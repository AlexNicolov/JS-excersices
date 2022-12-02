function lowerToUpper(input) {

/*    for (let currentCharIndex of input) {
        let currentChar = currentCharIndex.charCodeAt(0);
        if (currentChar >= 65 && currentChar <= 90){

           console.log('upper-case');
    }else if(currentChar >= 97 && currentChar <= 122){
console.log('lower-case');
    }
    }
*/
/*
if(input === input.toUpperCase()){
    console.log('upper-case');
}else{
    console.log('lower-case');
} */

console.log(input === input.toUpperCase() ? 'upper-case' : 'lower-case')
    
}


lowerToUpper('A');
lowerToUpper('f');