/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let str = '',
        res = [];  
    compute(n,0,0,str,res);
    return res;
};

function compute(n,left,right,str,res){
    if(left + right === n * 2){
        res.push(str);
        return;
    }

    if(left < n){
        compute(n,left + 1,right,str + '(',res);
        if(right < left){
            compute(n,left,right + 1,str + ')',res);
        }
    }
    else{
        compute(n,left,right + 1,str + ')',res);
    }
}

console.log(generateParenthesis(3));