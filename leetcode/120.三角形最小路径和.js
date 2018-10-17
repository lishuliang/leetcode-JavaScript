/**
 * @param {number[][]} triangle
 * @return {number}
 */
let minimumTotal = function(triangle) { //动态规划 自底向上计算
    let len = triangle.length;
    let res = triangle[len - 1];
    for(let i = len - 2;i >= 0;i--){
        for(let j = 0;j <= i;j++){
            res[j] = Math.min(res[j],res[j + 1]) + triangle[i][j];
        }
    }
    return res[0];
};

console.log(minimumTotal([
                        [2],
                        [3,4],
                        [6,5,7],
                        [4,1,8,3]
                        ]
                        ));