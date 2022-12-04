function jsonToObj(params) {
    let obj = JSON.parse(params);

    for(let key of Object.keys(obj)){
        console.log(`${key}: ${obj[key]}`);
    }
}

jsonToObj('{"name": "George", "age": 40, "town": "Sofia"}');
jsonToObj('{"name": "Peter", "age": 35, "town": "Plovdiv"}');