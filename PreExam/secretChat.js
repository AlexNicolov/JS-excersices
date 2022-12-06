function secretChat(input) {
    // take text from input
    // parse commands
    // InsertSpace
    // - take left and right parts (devide index)
    // - return left + space + right
    // - print current text
    // - return трябва да стане след печатането
    // Reverse
    // - find location of substring
    // - if found ->
    // -- take left part from start to index
    // -- take right part from end of substring to end of text
    // -- return left + right + reversed substring
    // -- print current text
    // - else -> print error
    // ChangeAll
    // - replace all occurences of substring with replacement
    // - print current text
    // Print Result
    let commands = {
        InsertSpace,
        Reverse,
        ChangeAll
    }
    let text = input.shift();

    while (input[0] != 'Reveal') {
        let tokens = input.shift().split(':|:');
        let name = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];
        let command = commands[name];
        text = command(text, p1, p2);
    }
    console.log(`You have a new text message: ${text}`);
    function InsertSpace(text, index) {
        let left = text.slice(0, index);
        let right = text.slice(index);
        let result = left + ' ' + right;
        console.log(result);
        return result;
    }
    function Reverse(text, substr) {
        let index = text.indexOf(substr);
        if (index != -1) {
            let left = text.slice(0, index);
            let right = text.slice(index + substr.length);
            let result = left + right + substr.split('').reverse().join('');
            console.log(result);
            return result;
        } else {
            console.log('error');
            return text;
        }
    }
    function ChangeAll(text, substring, replacement) {
        let result = text.split(substring).join(replacement);
        console.log(result);
        return result;
    }
}

secretChat(['heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal']);
console.log('---');
secretChat(['Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:',
    'Reveal']);