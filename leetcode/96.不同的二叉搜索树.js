/**
 * @param {number} n
 * @return {number}
 */
let numTrees = function(n) {
    if(n === 0 || n=== 1)
        return n;
    let res = new Array(n + 1);
    res.fill(0);
    res[0] = 1;
    res[1] = 1;
    for(let i = 2;i <= n;i++){
        for(let j = 0;j < i;j++){
            res[i] = res[i] + res[j] * res[i - j - 1];  //根节点的左子树个数*右子树个数
        }
    }
    return res[n];
};

console.log(numTrees(3));