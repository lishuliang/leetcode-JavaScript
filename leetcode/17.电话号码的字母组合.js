/**
 * @param {string} digits
 * @return {string[]}
 */
let obj = {
    '2':['a','b','c'],
    '3':['d','e','f'],
    '4':['g','h','i'],
    '5':['j','k','l'],
    '6':['m','n','o'],
    '7':['p','q','r','s'],
    '8':['t','u','v'],
    '9':['w','x','y','z']
}

var letterCombinations = function(digits) {
    let res = [];
    let str = '';
    if(digits.length < 1)
        return [];
    let num = digits.replace(/0|1/gi,'');
    digui(num,0,str,res);
    return res;
};

function digui(arr,index,str,res){
    if(index === arr.length){
        res.push(str);
        return;
    }
    let temp = obj[arr[index]];
    if(index < arr.length){
        for(let i = 0;i < temp.length;i++){
            digui(arr,index + 1,str + temp[i],res);
        }
    }
}

var letterCombinations = function(digits) {
    let res = [];
    if(digits.length < 1)
        return [];
    let num = digits.replace(/0|1/gi,'');

    for(let i = 0;i < arr.length;i++){
        let str = '';
        
    }
    return res;
};

console.log(letterCombinations('23'));