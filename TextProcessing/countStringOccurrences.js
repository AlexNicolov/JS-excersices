function count(text, word) {
 let tokens =  text.split(' ');
 let count = 0;
 for (let token of tokens) {
     if(token == word){
         count++;
     }
 }
 console.log(count);
}




count('This is a word and it also is a sentence',  'is');
count('softuni is great place for learning new programming languages','softuni')