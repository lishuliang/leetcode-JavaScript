/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
let convert = function(s, numRows) {
    if(numRows === 1)
        return s;
        
    let res = '',
        arr = new Array(numRows),
        col = 0;
    
    for(let i = 0;i < numRows;i++){
        arr[i] = [];
    }

    for(let i = 0;i < s.length;i++){
        if(col % (numRows - 1) === 0){
            for(let j = 0;j < numRows;j++){
                j !== numRows - 1 ? arr[j][col] = s[i++] : arr[j][col] = s[i];
            }
        }
        else{
            let row = (numRows - 1) - (col % (numRows - 1));
            arr[row][col] = s[i];
        }
        col++;
    }

    for(let i = 0;i < numRows;i++){
        for(let j = 0;j < arr[i].length;j++){
            // arr[i][j] ? res += arr[i][j] : res += ' ';
            arr[i][j] && (res += arr[i][j]);
        }
        // res += '\n';
    }

    return res;
};

console.log(convert("PAYPALISHIRING",3));