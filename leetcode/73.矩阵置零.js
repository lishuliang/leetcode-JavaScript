/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

let setZeroes = function(matrix) {  //空间复杂度O(1)
    if(matrix.length === 0) 
        return;
    let row = matrix.length;
    let col = matrix[0].length;
    let rowFlag = false;
    let colFlag = false;
    for(let i = 0;i < row;i++){
        matrix[i][0] === 0 && (colFlag = true);
    }
    for(let i = 0;i < col;i++){
        matrix[0][i] === 0 && (rowFlag = true);
    }
    for(let i = 1;i < row;i++){
        for(let j = 1;j < col;j++){
            if(matrix[i][j] === 0){
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    for(let i = 1;i < row;i++){
        for(let j = 1;j < col;j++){
            if(matrix[i][0] === 0 || matrix[0][j] === 0){
                matrix[i][j] = 0;;
            }
        }
    }
    if(rowFlag){
        for(let i = 0;i < col;i++)
            matrix[0][i] = 0;
    }
    if(colFlag){
        for(let i = 0;i < row;i++)
            matrix[i][0] = 0;
    }
    return matrix;
};


console.log(setZeroes([[1,0,3]]));


/* let setZeroes = function(matrix) { //空间复杂度O(m + n)
    if(matrix.length === 0) 
        return;
    let row = matrix.length;
    let col = matrix[0].length;
    let rowFlag= {};
    let colFlag = {};
    for(let i = 0;i < row;i++){
        for(let j = 0;j < col;j++){
            if(matrix[i][j] === 0){
                rowFlag[i] = true;
                colFlag[j] = true;
            }
        }
    }
    for(let i = 0;i < row;i++){
        for(let j = 0;j < col;j++){
            if(rowFlag[i] || colFlag[j]){
                matrix[i][j] = 0;;
            }
        }
    }
    return matrix;
}; */
