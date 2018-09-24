/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var deleteDuplicates = function(head) {
    if(head === null || head.next === null)
        return head;
    let newHead = new ListNode(-1);
    newHead.next = head;
    pre = newHead;
    while(pre.next !== null){
        let cur = pre.next;
        while(cur.next && cur.val === cur.next.val){
            cur = cur.next;
        }
        if(cur !== pre.next){
            pre.next = cur.next;   //跳过重复项
        }
        else{
            pre = pre.next;
        }
    }
    return newHead.next;
};

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(3);
head.next.next.next.next.next = new ListNode(4);

console.log(deleteDuplicates(head));
