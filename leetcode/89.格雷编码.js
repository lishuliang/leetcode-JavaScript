/**
 * @param {number} n
 * @return {number[]}
 */
let grayCode = function(n) {
    let ans = [];
    for (let i = 0; i < (1 << n); i++) 
        ans[i] = i ^ (i >> 1);
    return ans; 
};

console.log(grayCode(2));