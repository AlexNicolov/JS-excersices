function passwordGenerator(input) {
    let vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    let [firstString, secondString, thirdString] = input;
    let combinedString = firstString.concat(secondString).toLowerCase();
   let password = "";
   thirdString = thirdString.toUpperCase();
   let vowelIndex = 0;
   for (let index = 0; index < combinedString.length; index++) {
    if(vowels.includes(combinedString[index])){
        let indexOfChar = vowelIndex % thirdString.length;
        vowelIndex ++;
        let currentChar = thirdString.charAt(indexOfChar);
        password += currentChar;
    }else{
        password += combinedString[index];
    }
   }
console.log(`Your generated password is ${password.split('').reverse().join("")}`);
}

passwordGenerator(['iLOVEpizza', 'ihatevegetables', 'orange']);
passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']);