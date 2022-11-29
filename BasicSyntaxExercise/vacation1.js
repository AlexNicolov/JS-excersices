function solve(numPeople, group, day) {
    let price = 0;
    let discount = 0;
    switch (group) {
        case 'Students':
            if (day === "Friday") {
                price = 8.45;
            } else if (day === 'Saturday') {
                price = 9.80;
            } else if (day === 'Sunday') {
                price = 10.46;
            }
            if (numPeople >= 30) {
                price = price - (price * 0.15);
            }
            break;
        case 'Business':
            if (day === "Friday") {
                price = 10.90;
            } else if (day === 'Saturday') {
                price = 15.60;
            } else if (day === 'Sunday') {
                price = 16;
            }
            if (numPeople >= 100) {
                numPeople = numPeople - 10;
            }
            break;
        case 'Regular':
            if (day === "Friday") {
                price = 15;
            } else if (day === 'Saturday') {
                price = 20;
            } else if (day === 'Sunday') {
                price = 22.50;
            }
            if (numPeople >= 10 && numPeople <= 20){
                price = price - (price * 0.05)
            }
            break;
        }
let totalPrice = price * numPeople

console.log(`Total price: ${totalPrice.toFixed(2)}`);
    }

    solve(30, "Students", "Sunday");
    solve(40, "Regular", "Saturday")