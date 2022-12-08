function starEnigma(input) {
    let messages = Number(input.shift());
    let regex = /@([A-Z][a-z]+)[^@\-!:>]*:\d+[^@\-!:>]*!(A|D)![^@\-!:>]*->\d+/;
    let attacked = [];
    let destroyed = [];
    for (let index = 0; index < messages; index++) {
        let encriptedMessages = input[index];
        let count = encriptedMessages
            .toLowerCase()
            .split('')
            .filter(
                (char) => char == "s" || char == "t" || char == "a" || char == "r"
            ).length;
        let decryptedMessage = encriptedMessages
            .split("")
            .map((c) => String.fromCharCode(c.charCodeAt(0) - count))
            .join("");
        let regexMatch = decryptedMessage.match(regex);
        if (regexMatch) {
            if (regexMatch[2] == "A") {
                attacked.push(regexMatch[1]);
            } else {
                if (regexMatch[2] == "D");
                destroyed.push(regexMatch[1]);
            }
        }
    }
    console.log(`Attacked planets: ${attacked.length}`);
    Object.entries(attacked).sort((a, b) => a[1].localeCompare(b[1])).forEach((p) => console.log(`-> ${p[1]}`));

    console.log(`Destroyed planets: ${destroyed.length}`);
    Object.entries(destroyed).sort((a, b) => a[1].localeCompare(b[1])).forEach((p) => console.log(`-> ${p[1]}`));
}

starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']);
console.log("---");
starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']);