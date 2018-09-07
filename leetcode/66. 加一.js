/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let res,
        carry = 0;
    let num = digits.join('');
    res = num.split('').reverse();

    if(parseInt(res[0]) + 1 + carry >=10){
        res[0] = parseInt(res[0]) + 1 + carry - 10;
        carry = 1;
    }
    else{
        res[0] = parseInt(res[0]) + 1;
        carry = 0;
    }

    for(let i = 1;i < res.length;i++){
        let temp = parseInt(res[i]) + carry;
        if(temp >= 10){
            res[i] = temp - 10;
            carry = 1;
        }
        else{
            res[i] = temp;
            carry = 0;
        }
    }

    if(carry === 1){
        res.push(1);
        carry = 0;
    }

    return res.reverse();
};

console.log(plusOne([9,9]));