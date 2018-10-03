/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let buildTree = function(inorder, postorder) {
    if(postorder.length === 0)
        return null;
    let root = new TreeNode(postorder[postorder.length - 1]);
    let leftTreeLen = inorder.indexOf(root.val);
    root.left = buildTree(inorder.slice(0,leftTreeLen),postorder.slice(0,leftTreeLen));
    root.right = buildTree(inorder.slice(1 + leftTreeLen),postorder.slice(leftTreeLen,postorder.length - 1));
    return root;
};

let inorder = [9,3,15,20,7];
let postorder = [9,15,7,20,3];

console.log(buildTree(inorder,postorder));