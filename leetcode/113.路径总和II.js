/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let pathSum = function(root, sum) {
    let res = [];
    let temp = [];
    dfs(root,sum,res,temp);
    return res;
};

function dfs(root,sum,res,temp) {
    if(!root)
        return;
    temp.push(root.val);
    if(sum === root.val && !root.left && !root.right){
        res.push(temp.slice());
    }
    dfs(root.left,sum - root.val,res,temp);
    dfs(root.right,sum - root.val,res,temp);
    temp.pop();
}

let root = new TreeNode(5)
root.left = new TreeNode(4)
root.left.left = new TreeNode(11)
root.left.left.left = new TreeNode(7)
root.left.left.left = new TreeNode(2)
root.right = new TreeNode(8)
root.right.left = new TreeNode(13)
root.right.right = new TreeNode(4)
root.right.right.left = new TreeNode(5)
root.right.right.right = new TreeNode(1)

console.log(pathSum(root,22))
