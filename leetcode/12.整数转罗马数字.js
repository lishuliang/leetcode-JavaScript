
/* 整数转罗马数 */
function intToRoman(num){
    let result = '';

    if(num <= 0)
        return result;
    
    let number = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let roman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];

    for(let i = 0;i < 13;i++){
        while(num >= number[i]){
            num -= number[i];
            result += roman[i];
        }
    }

    return result;
}

//console.log(intToRoman(1994));

