/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if(grid.length === 0)
        return 0;
    let m = grid.length;
    let n = grid[0].length;
    let res = [];
    for(let i = 0;i < m;i++){
        res[i] = [];
        for(let j = 0;j < n;j++){
            if(j === 0 & i === 0){
                res[i][j] = grid[i][j];
            }
            else if(i === 0){
                res[i][j] = grid[i][j] + res[i][j - 1];
            }
            else if(j === 0){
                res[i][j] = grid[i][j] + res[i - 1][j];
            }
            else{
                res[i][j] = Math.min(grid[i][j] + res[i - 1][j],grid[i][j] + res[i][j - 1]);
            }
        }
    }
    return res[m - 1][n - 1];
};

console.log(minPathSum([
                            [1,3,1],
                            [1,5,1],
                            [4,2,1]
                        ]));