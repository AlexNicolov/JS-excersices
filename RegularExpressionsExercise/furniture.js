function furniture(input) {
    let totalSum = 0;
    console.log("Bought furniture:");
    for (let line of input) {
        if (line === "Purchase") {
            break;
        }
        let regExp = />>(?<name>[A-Za-z\s]+)<<(?<price>(\d+)?.\d+)!(?<quantity>\d+)/;
        let result = regExp.exec(line);
        if (result !== null) {
            totalSum += Number(result.groups.price) * Number(result.groups.quantity);
            console.log(result.groups.name);
        }
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);

furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'])