function theatrePromotions(day, age) {
    let price = 0;
    if (age >= 0 && age <= 122) {
        switch (day) {
            case "Weekday":
                if (age >= 0 && age <= 18) {
                    price = 12;
                } else if (age > 18 && age <= 64) {
                    price = 18;
                } else if (age > 64 && age <= 122) {
                    price = 12;
                }
                break;
            case "Weekend":
                if (age >= 0 && age <= 18) {
                    price = 15;
                } else if (age > 18 && age <= 64) {
                    price = 20;
                } else if (age > 64 && age <= 122) {
                    price = 15;
                }
                break;
            case "Holiday":
                if (age >= 0 && age <= 18) {
                    price = 5;
                } else if (age > 18 && age <= 64) {
                    price = 12;
                } else if (age > 64 && age <= 122) {
                    price = 10;
                }
                break;
        }
        console.log(`${price}$`);
    }else{
        console.log("Error!");
    }
}

theatrePromotions('Weekday', 12);
theatrePromotions('Holiday', -12);
theatrePromotions('Holiday', 9);
theatrePromotions("Weekday", 123);
theatrePromotions('Holiday', 12);
theatrePromotions('Holiday', 41);