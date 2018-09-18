/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let rotateRight = function(head, k) {
    if(!head) 
        return null;
    let index = 1;
    let cur = head; 
    while(cur.next !== null){
        cur = cur.next;
        index++;
    }
    cur.next = head;   //形成一个环结构
    let nums = index - k % index;  //计算头结点位置
    for(let i = 0;i < nums;i++){
        cur = cur.next;
    }
    head = cur.next;
    cur.next = null;
    return head;
};

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

console.log(rotateRight(head,3));