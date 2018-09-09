/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var mergeTwoLists = function(l1, l2) {
    let a = l1,
        b = l2,
        l3 = new ListNode(-1),
        c = l3;
    while(a !== null && b !== null){
        if(a.val <= b.val){
            c.next = a;
            a = a.next;
        }
        else{
            c.next = b;
            b = b.next;
        }
        c = c.next;
    }
    c.next = (a === null) ? b : a;
    return l3.next;
};

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);
let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);
//console.log(l1,l2);
console.log(mergeTwoLists(l1,l2));

/* 
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4 */