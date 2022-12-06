function worldTour(input) {
    let text = input.shift();
    let condition = input[0];
    let arr = [];
    
    arr.push(condition.split(':'));
    for((condition) of input){
        if(arr[0][0] == 'Add Stop'){
           let start = text.slice(0, arr[0][1]);
           let end = text.slice(arr[0][1],)
           text = start + arr[0][2] + end
        } if(arr[0][0] == 'Remove Stop'){
            console.log(456321);
        }
        console.log(text);
       
        }
    }
    



worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);