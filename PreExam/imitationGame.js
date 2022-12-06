function imitationGame(input) {
    let commands = {
        Move,
        Insert,
        ChangeAll,
    };
    //take encoded message
    let message = input.shift();

    //repeat for every line of input
    while (input[0] != 'Decode') {
        let line = input.shift();

        //parse line
        let tokens = line.split('|');
        //find and execute command with parse parameters
        let command = tokens[0];
        message = commands[command](message, tokens[1], tokens[2]);
    }
    //print result

    console.log(`The decrypted message is: ${message}`);

function Move(str, num) {
    let start = str.substring(0, num);
    let end = str.substring(num, str.length);
    return end + start;
}

function Insert(str, index, text) {
    let start = str.substring(0, index);
    let end = str.substring(index, str.length);
    return start + text + end;
}

function ChangeAll(str, match,text){
    let tokens = str.split(match);
    return tokens.join(text);
}
}

imitationGame(['zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',])

    imitationGame(['owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',])