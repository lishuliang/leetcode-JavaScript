/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let sumNumbers = function(root) {
    return dfs(root,0);
}

function dfs(root,sum) {
    if(!root)
        return 0;
    sum = sum * 10 + root.val;
    if(!root.left && !root.right)
        return sum;
    return dfs(root.left,sum) + dfs(root.right,sum);
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

console.log(sumNumbers(root));
