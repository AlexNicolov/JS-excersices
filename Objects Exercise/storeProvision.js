function storeProvision(availableStock, deliveredStock) {
    let storedProducts = {};
    for (let index = 0; index < availableStock.length; index += 2) {
        let currProduct = availableStock[index];
        storedProducts[currProduct] = Number(availableStock[index + 1]);
    }
    for (let index = 0; index < deliveredStock.length; index += 2) {
        let newCurrProduct = deliveredStock[index];
        if (!storedProducts.hasOwnProperty(newCurrProduct)) {
            storedProducts[newCurrProduct] = 0;
        }
        storedProducts[newCurrProduct] += Number(deliveredStock[index + 1]);
    }
    for (let product in storedProducts) {
        console.log(`${product} -> ${storedProducts[product]}`);  
    }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
    
storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
    );