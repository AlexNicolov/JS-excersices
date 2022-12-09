function revealWords(words, sentence) {
  words= words.split(", ");
  for(let word of words){
    sentence = sentence.replace('*'.repeat(word.length), word)
  }
console.log(sentence);

}

revealWords('great',
'softuni is ***** place for learning new programming languages');
console.log('---');
revealWords('great, Learning',
'softuni is ***** place for ******** new programming languages');
