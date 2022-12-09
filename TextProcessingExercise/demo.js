function cutAndReverse(input) {
    let sentense = input.split('').reverse().join('');
  
    words = [];
    let currWord = sentense[0];
    for (let index = 1; index < sentense.length; index++) {
        if(sentense[index].toUpperCase() != sentense[index]){
            currWord = currWord.concat(sentense[index]);
        }else{
            words.push(currWord);
            currWord = sentense[index];
        }
                }
         words.push(currWord);
         text = words.join(' ');

let firstHalf = text
.slice(0, text.length / 2)
.trim();
let secondHalf = text
.slice(text.length /2)
.trim();


console.log(firstHalf);
console.log(secondHalf);

}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');