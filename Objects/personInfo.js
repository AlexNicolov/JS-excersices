function personInfo(firstName, lastName, age) {
    let result = {
        'firstName': firstName,
        'lastName': lastName,
        'age': age
    };
        // втори вариант - композиция
        // let result = {
        // firstName,
        // lastName,
        // age
        // };

return result;
}

console.log(personInfo("Peter", 
"Pan",
"20"));