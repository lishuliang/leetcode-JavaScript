/**
 * @param {number[][]} res
 * @return {number[]}
 */
var generateMatrix = function(n) {
    if(n === 0)
        return [];
    let x = 0,
        y = 0,
        x2 = n - 1,
        y2 = n - 1,
        num = 1;
        res = [];
    for(let i = 0;i <= x2;i++){
        res[i] = [];
    }
    while(x <= x2 && y <= y2){
        num = generateEdge(res,x++,y++,x2--,y2--,num);
    }
    return res;
};

function generateEdge(res,x,y,x2,y2,num) {
    if(x === x2){
        for(let i = y;i <= y2;i++){
            res[x][i] = num++;
        }
    }
    else if(y === y2){
        for(let i = x;i <= x2;i++){
            res[i][y] = num++;
        }
    }
    else{
        let curX = x;
        let curY = y;

        while(curY !== y2){
            res[curX][curY++] = num++;
        }

        while(curX !== x2){
            res[curX++][y2] = num++;
        }

        while(curY !== y){
            res[x2][curY--] = num++;
        }

        while(curX !== x){
            res[curX--][y] = num++;
        }
    }
    return num;
}

console.log(spiralOrder(3));
