/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {  //利用set判断是否有相同的数
    let row = board.length;
    let col = board[0].length;

    for(let i = 0;i < row;i++){ //检查每行
        let temp = [];
        for(let j = 0;j < col;j++){
            board[i][j] !== '.' && temp.push(board[i][j]);
        }
        let set = new Set(temp);
        console.log(temp,set);
        if(temp.length !== set.size){
            return false;
        }
    }

    for(let i = 0;i < col;i++){ //检查每列
        let temp = [];
        for(let j = 0;j < row;j++){
            board[j][i] !== '.' && temp.push(board[j][i]);
        }
        let set = new Set(temp);
        if(temp.length !== set.size){
            return false;
        }
    }

    for(let x = 0;x < 9;x = x + 3){  //检查每块
        for(let y = 0;y < 9;y = y + 3){
            let temp = [];
            for(let i = x;i < x + 3;i++){
                for(let j = y;j < y + 3;j++){
                    board[i][j] !== '.' && temp.push(board[i][j]);
                }
            }
            let set = new Set(temp);
            if(temp.length !== set.size){
                return false;
            }
        }
    }

    return true;
};

console.log(isValidSudoku([
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]));