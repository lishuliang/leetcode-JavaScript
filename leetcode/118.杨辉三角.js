/**
 * @param {number} numRows
 * @return {number[][]}
 */
let generate = function(numRows) {
    let res = [[1],[1,1]];
    if(numRows === 0)
        return [];
    if(numRows === 1)
        return [res[0]];
    for(let i = 2;i <= numRows;i++){
        res[i - 1] = [];
        for(let j = 0;j < i;j++){
            res[i - 1][j] = (j === 0 || j === i - 1) ? 1 : (res[i - 2][j - 1] + res[i - 2][j]);
        }
    }
    return res;
};

console.log(generate(5));