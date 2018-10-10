/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let generateTrees = function(n) {
    if(n === 0)
        return [];
    return dfs(1,n);
};

function dfs(start,end){
    if(start > end)
        return [null];
    let res = [];
    for(let i = start;i <= end;i++){
        let left = dfs(start,i - 1);
        let right = dfs(i + 1,end);
        left.forEach(function(a){
            right.forEach(function(b){
                let node = new TreeNode(i);
                node.left = a;
                node.right = b;
                res.push(node);
            })
        });
    }
    return res;
}

console.log(generateTrees(3));