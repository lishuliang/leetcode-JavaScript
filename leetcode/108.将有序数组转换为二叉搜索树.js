/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let sortedArrayToBST = function(nums) {
    if(!nums)
        return null;
    return dfs(nums,0,nums.length - 1);
};

function dfs(nums,l,r){
    if(l <= r){
        let mid = (l + r) >> 2;
        let node = new TreeNode(nums[mid]);
        node.left = dfs(nums,l,mid - 1);
        node.right = dfs(nums,mid + 1,r);
        return node;
    }
    else{
        return null;
    }
}