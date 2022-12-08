function censoredWords(text, word) {
// while (text.includes(word)) {
//     text = text.replace(word, '*'.repeat(word.length));
// }
//     console.log(text)
// тук има проблем че ако думата е '*', цикълът ще стане безкраен.


let tokens = text.split(word);
console.log(tokens.join('*'.repeat(word.length)));
}

censoredWords('A small sentence with some small words', 'small');
censoredWords('Find the hidden word', 'hidden');
censoredWords('да ти го начукам', 'чукам')