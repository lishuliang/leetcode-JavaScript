/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let res = '';
    let m = a.length;
    let n = b.length;
    let maxLen,
        minLen,
        addFlag = 0;
    if(m === 0 && n === 0)
        return '';
    if(m === 0 || n === 0){
        return m === 0 ? b : a;
    }
    if(m > n){
        maxLen = m;
        minLen = n;
    }
    else{
        maxLen = n;
        minLen = m;
        [a,b] = [b,a];
    }
    for(let i = maxLen - 1,j = minLen - 1;i >= 0;i--,j--){
        let result;
        if(j >= 0){
            result = parseInt(a[i]) + parseInt(b[j]) + addFlag;
        }
        else {
            result = parseInt(a[i]) + addFlag;
        }
        if(result > 1){
            if(i === 0 && result >= 2){
                res = '1' + (result % 2).toString() + res;       
            }
            else{
                res = (result - 2).toString() + res;
                addFlag = 1;
            }
        }
        else{
            res = result.toString() + res;
            addFlag = 0;
        }
    }
    return res;
};

console.log(addBinary('1010','1011'));