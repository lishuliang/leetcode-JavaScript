/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var partition = function(head, x) {
    if(head === null)
        return null;
    let start = new ListNode(-1);
    start.next = head;
    let pre = start;
    let cur = start.next;
    while(cur && cur.val < x){
        pre = cur;
        cur = cur.next;
    }
    while(cur){
        while(cur.next && cur.next.val >= x)
            cur = cur.next;
        if(!cur.next)
            return start.next;
        let temp = cur.next;
        cur.next = cur.next.next;
        temp.next = pre.next;
        pre.next = temp;
        pre = pre.next;
    }
    return start.next;
};

var partition = function(head, x) {  //创建2个新链表
    let less = new ListNode(-1);
    let more = new ListNode(-1);
    lessHead = less;
    moreHead = more;
    while(head){
        if(head.val < x){
            less.next = head;
            less = less.next;
        }
        else{
            more.next = head;
            more = more.next;
        }
        head = head.next;
    }
    more.next = null;
    less.next = moreHead.next;
    return lessHead.next;
};