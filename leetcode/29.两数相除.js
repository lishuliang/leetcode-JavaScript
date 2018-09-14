/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
let divide = function(dividend, divisor){
    if(dividend === -Math.pow(2,31) && divisor === -1)
        return Math.pow(2,31) - 1;

    let a = Math.abs(dividend),
        b = Math.abs(divisor),
        flag = 0,
        res = 0;
    
    if(dividend > 0 ^ divisor > 0)   //判断符号是否相同
        flag = 1;

    while(a >= b){
        let temp = b;
        let divided = 1;
        while(a >= (temp << 1) && (temp << 1) > 0){
            temp <<= 1;
            divided <<= 1;
            // console.log(temp,divided);
        }
        a -= temp;
        res += divided;
        //console.log(a,res);
    }

    return flag ? -res : res;
};

console.log(divide(2147483647,1));
//console.log(1073741824 << 1); //超出范围