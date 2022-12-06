function activationKeys(input) {
    let text = input.shift("");
    let commands = input.shift().split(">>>");
    let match = true;
    while (commands[0] !== "Generate") {
        if (commands[0] === "Slice") {
            let startSlice = text.slice(0, commands[1]);
            let endSlice = text.slice(commands[2])
            text = startSlice + endSlice;
            console.log(text);
        }
        if (commands[0] === "Flip") {
            if (commands[1] === "Upper") {
                let startSlice = text.slice(0, commands[2]);
                let endSlice = text.slice(commands[3])
                let sliced = text.substring(commands[2], commands[3]);
                let changeUpper = sliced.toUpperCase();
                text = startSlice + changeUpper + endSlice;
                console.log(text);
            } else if (commands[1] === "Lower") {
                let startSlice = text.slice(0, commands[2]);
                let endSlice = text.slice(commands[3])
                let sliced = text.substring(commands[2], commands[3]);
                let changeLower = sliced.toLowerCase();
                text = startSlice + changeLower + endSlice;
                console.log(text);
            }
        } if (commands[0] === 'Contains') {
            let match = text.indexOf(commands[1]);
            if (match <= 0) {
                console.log('Substring not found!');
            }else{
                match = String(commands[1]);              
                console.log(`${text} contains ${match}`);
            }
        }
        commands = input.shift().split(">>>");
    }
    if (commands[0] === "Generate") {
        console.log(`Your activation key is: ${text}`);
    }
}


activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);
console.log('---');
activationKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"]);