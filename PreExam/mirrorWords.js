function mirrorWords(input) {
    // take text from input
    let text = input[0];
    // find regex matches - cycle
    let pattern = /(@|#)([A-Za-z]{3,})\1{2}([A-Za-z]{3,})(\1)/g;
    let match = pattern.exec(text)
    let result = [];
    let counter = 0;
    // for every match
    while (match != null) {
        // - add to counter
        counter++;
        // - check if matches are mirrored
       
        let word1 = match[2];
        let word2 = match[3];
        let reversed = word2.split('').reverse().join('');
        // -- if yes, add result
        if (word1 == reversed) {
            result.push(`${word1} <=> ${word2}`);
        }
        match = pattern.exec(text)
    }
    // print result
    if (counter == 0) {
        console.log('No word pairs found!');
    } else{
        console.log(`${counter} word pairs found!`);
}
    if (result.length == 0) {
        console.log('No mirror words!');
    } else {
        console.log(`The mirror words are:`);
        console.log(result.join(', '));
        
    }
}

mirrorWords
    (['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
console.log('---');
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
console.log('---');
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);