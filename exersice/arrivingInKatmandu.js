function katmandu(input) {
    let pattern = /(?<name>^[a-zA-Z-@#!?$0-9]+)=(?<geoLength>\d+)<<(?<geoHash>.+$)/;
    let i = 0;

   

    while (input[i] !== 'Last note') {
        let match = pattern.exec(input[i]);
        if (!pattern.test(input[i]) || Number(match.groups.geoLength) !== Number(match.groups.geoHash.length)) {
            console.log('Nothing found!');
            i++;
            continue;
        }

        let mountainName = symbolReplacer(match.groups.name);
        console.log(`Coordinates found! ${mountainName} -> ${match.groups.geoHash}`);
        i++;
    }

    function symbolReplacer(word) {
        return word.replace(/[^A-Za-z0-9]/g, "")
    }
}

katmandu(["!@Ma?na?sl!u@=7<<tv58ycb4845",
    "E!ve?rest=.6<<tuvz26",
    "!K@2.,##$=4<<tvnd",
    "!Shiha@pan@gma##9<<tgfgegu67",
    "!###Anna@pur@na##=16<<tv5dekdz8x11ddkc",
    "Last note"]);
console.log("---");
katmandu(["Ka?!#nch@@en@ju##nga@=3<<thfbghvn",
    "=9Cho?@#Oyu<<thvb7ydht",
    "Nan??ga#Par!ba!t?=16<<twm03q2rx5hpmyr6",
    "Dhau??la#gi@ri?!#=3<<bvnfhrtiuy",
    "Last note"])