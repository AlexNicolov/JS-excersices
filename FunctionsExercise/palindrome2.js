function palindrome(input) {
    //     let regex = /[^A-Za-z0-9]/g;
    //     str = str.toLowerCase().replace(regex, '');
    //     let len = str.length;
    //     for (let i = 0; i < len/2; i++) {
    //       if (str[i] !== str[len - 1 - i]) {
    //           return false;
    //       }
    //     }
    //     return true;

    //    }
    //    palindrome("A man, a plan, a canal. Panama");
let num = Number(input)
    let len = input.length;

    for (let i = 0; i < len / 2; i++) {
        if (num[i] !== num[len - 1 - i]) {
            console.log('sdgf');
            console.log('palindrom');
        }
        
        
    }

}
palindrome(12321);