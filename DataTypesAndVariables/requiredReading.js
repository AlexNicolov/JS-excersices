function requiredReading(pagesOfBook, pagesReadForHour, daysForReading) {
let hoursPerDay = (pagesOfBook / pagesReadForHour) / daysForReading;

console.log(hoursPerDay);
}

requiredReading(212,
    20 ,
    2 );
requiredReading(432,
    15 ,
    4 );