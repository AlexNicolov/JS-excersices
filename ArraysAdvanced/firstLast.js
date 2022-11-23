function firstLast(input) {
let first = input.shift();
let last = input.pop();

console.log(Number(first) + Number(last));
    
} 

firstLast(['10', '20']);
firstLast(['20', '30', '40']);