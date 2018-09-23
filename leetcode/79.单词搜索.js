/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
let exist = function(board, word) {
    let hash = {};  //用于路线标记
    for(let i = 0;i < board.length;i++){
        for(let j = 0;j < board[0].length;j++){
            if(dfs(board,word,hash,i,j,0)){
                return true;
            }
        }
    }
    return false;
};

function dfs(board,word,hash,i,j,index){
    let key = i + ',' + j;
    let result = false;
    if(hash[key]){
        return false;
    }
    if(index === word.length){
        return true;
    }
    if(i < 0 || i >= board.length || j < 0 || j > board[0].length){
        return false;
    }
    if(word[index] === board[i][j]){
        hash[key] = true;
        result = dfs(board,word,hash,i - 1,j,index + 1) || dfs(board,word,hash,i + 1,j,index + 1) || dfs(board,word,hash,i,j - 1,index + 1) || dfs(board,word,hash,i,j + 1,index + 1);
        hash[key] = false;
    }
    return result;
}

console.log(exist([
                    ['A','S','C','E'],
                    ['S','F','C','S'],
                    ['A','D','E','E']
                ],'ASA'));