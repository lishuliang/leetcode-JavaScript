/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {  //将二维转为一维，在用二叉搜索查找
    if(matrix.length === 0 || matrix[0].length === 0)
        return false;
    return [].concat(...matrix).includes(target);
};

console.log(searchMatrix([[1]],1));