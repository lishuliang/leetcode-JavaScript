/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let buildTree = function(preorder, inorder) {
    if (preorder.length === 0) {
        return null;
    }    
    let root = new TreeNode(preorder[0]) // 根
    let leftTreeLen = inorder.indexOf(root.val)
    root.left = buildTree(preorder.slice(1, 1 + leftTreeLen), inorder.slice(0, leftTreeLen));
    root.right = buildTree(preorder.slice(1 + leftTreeLen), inorder.slice(1 + leftTreeLen));
    return root;
};