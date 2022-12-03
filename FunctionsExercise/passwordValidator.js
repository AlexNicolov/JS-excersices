function passValidator(password) {
    function isLengthEnough(stringPassword) {
        return stringPassword.length >= 6 && stringPassword.length <= 10;
    }

    function isOnlyLettersAndDigits(stringPassword) {
        for (let currentCharIndex of stringPassword) {
            let currentChar = currentCharIndex.charCodeAt(0);
            if (
                !(currentChar >= 48 && currentChar <= 57) &&
                !(currentChar >= 65 && currentChar <= 90) &&
                !(currentChar >= 97 && currentChar <= 122)
            ) {
                return false;
            }
        }
        return true;
    }

    function isHavingAtLeastTwoDigits(stringPassword) {
        let count = 0;
        for (let charIndex of stringPassword) {
            let currChar = charIndex.charCodeAt(0);
            if (currChar >= 48 && currChar <= 57) {
                count++;
            }
        }
        return count >= 2 ? true : false;
    }

    let isLengthValid = isLengthEnough(password);
    let isLetterAndDigitsOnly = isOnlyLettersAndDigits(password);
    let isContainingAtLeastTwoDigits = isHavingAtLeastTwoDigits(password);

    if (isLengthValid && isLetterAndDigitsOnly && isContainingAtLeastTwoDigits) {
        console.log("Password is valid");
    }
    if (!isLengthValid) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!isLetterAndDigitsOnly) {
        console.log("Password must consist only of letters and digits");
    }
    if (!isContainingAtLeastTwoDigits) {
        console.log("Password must have at least 2 digits");
    }
}

passValidator('logIn');
passValidator('MyPass123');