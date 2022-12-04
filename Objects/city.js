function cityinfo(city){
let props = Object.keys(city);

for(let prop of props) {
    console.log(`${prop} -> ${city[prop]}`);
}
}

cityinfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);
cityinfo({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
)