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
let minDepth = function(root) {
    if(!root)
        return 0;
    if(root.left === null && root.right === null)
        return 1;
    if(root.left === null)
        return minDepth(root.right) + 1;
    if(root.right === null)
        return minDepth(root.left) + 1;
    return Math.min(minDepth(root.left),minDepth(root.right)) + 1;
}