/**
 * @param {number} rowIndex
 * @return {number[]}
 */
let getRow = function(rowIndex) {
    let res = [];
    for(let i = 0;i <= rowIndex;i++){
        for(let j = i - 1;j > 0;j--){
            res[j] = res[j] + res[j - 1];
        }
        res.push(1);
    }
    return res;
};

console.log(getRow(3));