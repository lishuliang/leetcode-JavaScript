/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if(obstacleGrid.length === 0)
        return 0;
    let res = [];
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    for(let i = 0;i < m;i++){
        res[i] = [];
        for(let j = 0;j < n;j++){
            if(obstacleGrid[i][j] === 1){
                res[i][j] = 0;
            }
            else{
                if(i === 0 && j === 0){
                    res[i][j] = 1;
                }
                else if(i === 0){
                    res[i][j] = res[i][j - 1];
                }
                else if(j === 0){
                    res[i][j] = res[i - 1][j];
                }
                else{
                    res[i][j] = res[i - 1][j] + res[i][j - 1];
                }
            }
        }
    }
    return res[m - 1][n - 1];
};

console.log(uniquePathsWithObstacles([
                            [0,0,1],
                            [0,1,0],
                            [0,0,0]
                        ]));