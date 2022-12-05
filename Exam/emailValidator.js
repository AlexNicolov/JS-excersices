function emailValidator(input) {
    let eMail = input.shift();
    let linesOfInput = input.shift().split(', ')

    while (linesOfInput[0] !== "Complete") {
        if (linesOfInput[0] == "Make Upper") {

            eMail = eMail.toUpperCase();
            console.log(eMail);


        } else if (linesOfInput[0] == "Make Lower") {
            eMail = eMail.toLowerCase();
            console.log(eMail);

        } else if (linesOfInput[0] == "GetDomain") {

            let symbol = linesOfInput[1];
            let domain = eMail.slice(-symbol);
            console.log(domain);

        } else if (linesOfInput[0] == "GetUsername") {
            let symbol = eMail.indexOf('@');
            if (eMail.includes("@")) {
                let userName = eMail.slice(0, symbol)
                console.log(userName);
            } else {
                console.log(`The email ${eMail} doesn't contain the @ Symbol`);
            }

        } else if (linesOfInput[0] == "Replace") {

            let replaced = eMail.replaceAll(linesOfInput[1], '-');
            console.log(replaced);

        } else if (linesOfInput == "Encrypt") {
            let encrypted = eMail.split('');
            let allNum = [];
            for (let letter of encrypted) {
                let num = Number(letter.charCodeAt(0));
                allNum += num + " "
            }
            console.log(allNum);
        }
    
    linesOfInput = input.shift().split(' ');
}
}


emailValidator(["Mike123@somemail.com",
    "Make Upper",
    "GetDomain 3",
    "GetUsername",
    "Encrypt",
    "Complete"]);
console.log('---')
emailValidator(["AnotherMail.com",
    "Make Lower",
    "GetUsername",
    "Replace a",
    "Complete"]);
emailValidator(["Another@Mail.com",
    "Make Lower",
    "GetUsername",
    "GetDomain 3",
    "Encrypt",
    "Complete"])