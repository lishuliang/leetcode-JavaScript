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

let isSymmetric = function(root) {
    if(!root)
        return true;
    return help(root.left,root.right);
};

function help(left,right){
    if(!left && !right)
        return true
    if((left && !right) || (!left && right) || (left.val !== right.val))
        return false;
    return help(left.left,right.right) && help(left.right,right.left);
}