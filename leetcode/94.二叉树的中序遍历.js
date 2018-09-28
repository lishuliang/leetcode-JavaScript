/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let inorderTraversal = function(root) {
    let res = [];
    let stack = [];
    if(!root)
        return res;
    while(root || !(stack.length === 0)){
        if(root){
            stack.push(root);
            root = root.left;
        }
        else{
            root = stack.pop();
            res.push(root.val);
            root = root.right;
        }
    }
    return res;
};