function daysOfWeek(dayAsNumber) {
 if(dayAsNumber >= 1 || dayAsNumber <= 7){
     let index = dayAsNumber - 1;
     
     let days = [
         'Monday',
         'Tuesday',
         'Wednesday',
         'Thursday',
         'Friday',
         'Saturday',
         'Sunday']
         
         console.log(days[index]);
        }else{
            console.log("Invalid day!");
    }
}

daysOfWeek(3);
daysOfWeek(-3);
daysOfWeek(6);
daysOfWeek(16);