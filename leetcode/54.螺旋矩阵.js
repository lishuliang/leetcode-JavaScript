/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length === 0)
        return [];
    let x = 0,
        y = 0,
        x2 = matrix.length - 1,
        y2 = matrix[0].length - 1,
        res = [];
    while(x <= x2 && y <= y2){
        printEdge(matrix,x++,y++,x2--,y2--,res);
    }
    return res;
};

function printEdge(matrix,x,y,x2,y2,res) {
    if(x === x2){
        for(let i = y;i <= y2;i++){
            res.push(matrix[x][i]);
        }
    }
    else if(y === y2){
        for(let i = x;i <= x2;i++){
            res.push(matrix[i][y]);
        }
    }
    else{
        let curX = x;
        let curY = y;

        while(curY !== y2){
            res.push(matrix[curX][curY++]);
        }

        while(curX !== x2){
            res.push(matrix[curX++][y2]);
        }

        while(curY !== y){
            res.push(matrix[x2][curY--]);
        }

        while(curX !== x){
            res.push(matrix[curX--][y]);
        }
    }
}

console.log(spiralOrder([
                        [3],
                        [2]
                    ]));