/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let isValidBST = function(root) {
    return dfs(root,-Number.MAX_VALUE,Number.MAX_VALUE);
};

function dfs(root,min,max){
    if(!root)
        return true;
    if(root.val <= min || root.val >= max){
        return false;
    }
    return dfs(root.left,min,root.val) && dfs(root.right,root.val,max);
}

let head = new TreeNode(0);
head.left = new TreeNode(-1);
console.log(isValidBST(head));