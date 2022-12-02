function nextDay(inputYear, inputMounth, inputDay) {
    let year = Number(inputYear);
    let mounth = Number(inputMounth) - 1;
    let day = Number(inputDay);

    let date = new Date(year, mounth, day);
    let nextDate = new Date(date);
    nextDate.setDate(date.getDate() + 1);
    let outputYear = nextDate.getFullYear();
    let outputMounth = nextDate.getMonth() + 1;
    let outputDay = nextDate.getDate();
    console.log(`${outputYear}-${outputMounth}-${outputDay}`);
}

nextDay(2016, 9, 30);
nextDay(2020, 3, 24)