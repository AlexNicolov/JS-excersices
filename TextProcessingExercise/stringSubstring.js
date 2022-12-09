function stringSubstring(searchedWord, text) {
    let arr = text.split(" ");

    for (let word of arr) {
        if (word.toLowerCase() === searchedWord.toLowerCase()) {
            console.log(searchedWord);
            return;
        }
    }
    console.log(`${searchedWord} not found!`);
}

stringSubstring('javascript',
    'JavaScript is the best programming language');

stringSubstring('python',
    'JavaScript is the best programming language');