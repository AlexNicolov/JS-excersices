function gladiatorExpenses(
    lostFight,
    helmetPrice,
    swordPrice,
    shiledPrice,
    armorPrice
) {
    let totalExpenses = 0;
    for (let currentFight = 1; currentFight <= lostFight; currentFight++) {
        if (currentFight % 2 === 0) {
            totalExpenses += helmetPrice;
        }
        if (currentFight % 3 === 0) {
            totalExpenses += swordPrice;
        }
        if (currentFight % 6 === 0) {
            totalExpenses += shiledPrice;
        }
        if (currentFight % 12 === 0) {
            totalExpenses += armorPrice;
        }
    }
console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);