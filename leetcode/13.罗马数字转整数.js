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