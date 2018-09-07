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

var swapPairs = function(head) {  //递归方式
    let p = head;

    if(p === null || p.next === null)
        return p;

    let pNext = p.next.next;
    let swapHead = p.next;
    swapHead.next = p;
    let swapNext = swapPairs(pNext);
    p.next = swapNext;

    return swapHead;
};

var swapPairs = function(head) { //循环方式
    let newHead = new ListNode(0);
    newHead.next = head;

    head = newHead;
    while(head.next !== null && head.next.next !== null){
        let n1 = head.next,
            n2 = head.next.next;
        head.next = n2;
        n1.next = n2.next;
        n2.next = n1;
        head = n1;
    }

    return newHead.next;
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);


console.log(swapPairs(head));