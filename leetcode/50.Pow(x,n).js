/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
let myPow = function(x, n) {
    if(n === 0)
        return 1;
    if(n < 0){
        x = 1 / x;
        n = -n;
    }
    let res = 1;
    for(let i = 0;i < n;i++){
        res *= x;
    }
    return res;
    // return x ** n;
};

console.log(myPow(2,-4));