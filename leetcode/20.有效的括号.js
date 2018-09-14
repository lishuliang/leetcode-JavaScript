/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
    let len = s.length;
    if(len === 0)
        return true;
    if(len % 2 ===1)
        return false;
    let arr = [];
    let obj = {
        '(':1,
        '[':2,
        '{':3,
        '}':4,
        ']':5,
        ')':6
    }
    for(let i = 0;i < len;i++){
        if(s[i] === '(' || s[i] ==='[' || s[i] === '{'){
            arr.push(s[i]);
        }
        else{
            if(obj[arr.pop()] + obj[s[i]] !== 7){
                return false;
            }
        }
    }
    return arr.length === 0;
};

console.log(isValid(']}'));