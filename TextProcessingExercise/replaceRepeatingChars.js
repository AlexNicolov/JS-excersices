function replaceRepeatingChars(input) {

    let uniqueArr = "";
    for (let index = 0; index < input.length; index++) {
        let currentChar = input.charAt(index);
        let nextChar = input.charAt(index + 1);
        if (currentChar !== nextChar) {
            uniqueArr += currentChar;
        }
    }
    console.log(uniqueArr);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');

replaceRepeatingChars('qqqwerqwecccwd');