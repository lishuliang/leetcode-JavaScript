
/* 整数转罗马数 */
function intToRoman(num){
    var result = '';

    if(num <= 0)
        return result;
    
    var number = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    var roman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];

    for(let i = 0;i < 13;i++){
        while(num >= number[i]){
            num -= number[i];
            result += roman[i];
        }
    }

    return result;
}

//console.log(intToRoman(1994));

/* 罗马数转整数 */
function romanToInt(str){
    var roman ={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }

    var result = 0;
    for(let i = 0;i < str.length;i++){
       if(roman[str.charAt(i)] >= roman[str.charAt(i + 1)] || i + 1 >= str.length){ 
            result += roman[str.charAt(i)];
       }
       else{
           result -= roman[str.charAt(i)];
       }
    }

    return result;
}

console.log(romanToInt('XCI'));