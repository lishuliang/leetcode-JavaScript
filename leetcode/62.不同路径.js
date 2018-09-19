/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

//递归方法
/* var uniquePaths = function(m, n) {
    return help(m,n,m,n);
};

function help(m,n,i,j) {
    if(i === 1 && j === 1)
        return 1;
    if(i === 1)
        return help(m,n,i,j - 1);
    if(j === 1)
        return help(m,n,i - 1,j);
    return help(m,n,i - 1,j) + help(m,n,i,j - 1);
} */
let uniquePaths = function(m, n) {  //dp 动态规划
    let res = [];
    for(let i = 0;i < m;i++){
        res[i] = [];
        for(let j = 0;j < n;j++){
            if(i === 0 || j === 0){
                res[i][j] = 1;
            }
            else{
                res[i][j] = res[i - 1][j] + res[i][j - 1];
            }
        }
    }
    return res[m - 1][n - 1];
};
console.log(uniquePaths(10,8));