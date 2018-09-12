/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) { //动态规划
    var a = [];
    a[0] = 1;
    a[1] = 1;
    a[2] = 2;
    if(n >= 3){
        for(let i = 3;i <= n;i++){
            a[i] = a[i-1] + a[i-2];
        }
    }
    return a[n];  
};