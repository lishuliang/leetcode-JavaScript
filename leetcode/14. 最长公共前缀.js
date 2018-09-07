/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let len = strs.length;
    let res = '';
    if(len === 0)
        return '';
    if(len === 1)
        return strs[0];
    for(let j = 0;j < strs[0].length;j++){
        let temp = strs[0][j];
        for(let i = 1;i < len;i++){
            if(strs[i][j] !== temp){
                return res;
            }
        }
        res += temp;
    }
    return res;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));