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

let addTwoNumbers = function(l1, l2) {
    let l3,
        c3,
        carry=0, //进位
        c1 = l1,
        c2 = l2;
    while(c1 !==null || c2 !==null || carry){
        let v1 = 0,
            v2 = 0;
        if(c1){
            v1 = c1.val;
            c1 = c1.next;
        }
        if(c2){
            v2 = c2.val;
            c2 = c2.next;
        }
        let sum = v1 + v2 + carry;
        carry = Math.floor(sum/10);
        if(!c3){
            l3 = new ListNode(sum%10);
            c3 = l3;
        }
        else{
            c3.next = new ListNode(sum%10);
            c3 = c3.next;
        }
    }
    return l3;
};

let l1 = new ListNode(2);
let l2 = new ListNode(5);
let l3 = new ListNode(4);
let l4 = new ListNode(3);
let l5 = new ListNode(6);
let l6 = new ListNode(4);

l1.next = l3;
l3.next =l4;
l2.next = l5;
l5.next = l6;
console.log(addTwoNumbers(l1,l2));