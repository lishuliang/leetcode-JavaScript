/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} head
 * @return {number[][]}
 */
let levelOrderBottom = function(head) {
    if(head === null)
        return [];
    let queue = [];
    let cur,
        last = head,
        nlast,
        temp = [],  //存放每层
        res = [];   //最后结果
    queue.push(head);
    while(queue !== null && queue.length !== 0){
        cur = queue.shift();
        temp.push(cur.val);
        //console.log(cur.val);
        if(cur.left !== null){
            queue.push(cur.left);
            nlast = cur.left;
        }
        if(cur.right !== null){
            queue.push(cur.right);
            nlast = cur.right;
        }
        if(cur === last){
            //console.log('###');
            res.push(temp);
            temp = [];
            last = nlast;
        }
    }
    return res.reverse();
};