/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let removeNthFromEnd = function(head, n) {
    if(head === null)
        return null;

    let first = head,
        second = head;

    while(n-- !==0)  //第一个指针先走n步
        first = first.next;

    if(!first)  //删除的节点为头结点
        return head.next;

    while(first.next !== null){
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;

    return head;
};

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(removeNthFromEnd(head,3));