/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let rotate = function(matrix) {
    let x = 0,
        y = 0,
        x2 = matrix.length - 1,
        y2 = matrix[x].length - 1;

    while(x < x2){
        rotateEdge(matrix,x++,y++,x2--,y2--);
    }

    return matrix;
}

function rotateEdge(matrix,x,y,x2,y2){
    let len = x2 - x;
    for(let i = 0;i < len;i++){
        let temp = matrix[x][y + i];
        matrix[x][y + i] = matrix[x2 - i][y];
        matrix[x2 - i][y] = matrix[x2][y2 -i];
        matrix[x2][y2 - i] = matrix[x + i][y2];
        matrix[x + i][y2] = temp;
    }
}

console.log(rotate([
                    [1,2,3],
                    [4,5,6],
                    [7,8,9]
                ]));