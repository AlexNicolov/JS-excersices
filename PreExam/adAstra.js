function solve(input) {
    let text = input[0];
    let pattern = /(#|\|)(?<itemName>[A-Z a-z]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
    let match = 0;
    let totalCalories = 0;
    let dailyCalories = 2000;
    let daysToLast = 0;
    let provisions = [];
    while (match = pattern.exec(text)) {
        let item = match.groups['itemName'];
        let date = match.groups['expDate'];
        let kCal = Number(match.groups['calories']);
        totalCalories += kCal;
        provisions.push(`Item: ${item}, Best before: ${date}, Nutrition: ${kCal}`)
    }
    daysToLast = Math.floor(totalCalories / dailyCalories)

    console.log(`You have food to last you for: ${daysToLast} days!`);
    console.log(provisions.join('\n'));
}


solve(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
solve(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
solve(['Hello|#Invalid food#19/03/20#450|$5*(@']);