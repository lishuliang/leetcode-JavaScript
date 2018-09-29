/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let reverseBetween = function(head, m, n) {
    let newHead = new ListNode(-1);
    newHead.next = head;
    let cur = newHead;
    let pre,last;
    for(let i = 1;i < m;i++){
        cur = cur.next;
    } 
    pre = cur;
    last = cur.next;
    let front = cur.next;
    for(let i = m;i <= n;i++){
        cur = pre.next;
        pre.next = cur.next;
        cur.next = front;
        front = cur;
    }
    cur = pre.next;
    pre.next = front;
    last.next = cur;
    return newHead.next;
};

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(reverseBetween(head,2,4));