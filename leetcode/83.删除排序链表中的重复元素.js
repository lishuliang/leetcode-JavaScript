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
    if((head === null) || (head.next === null)) 
        return head;
    
    var cur=head;
    while(cur.next !== null){
        if(cur.val !== cur.next.val){
            cur = cur.next;
        }else{
            cur.next = cur.next.next;
        }
    }

    return head;
};

let head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(1);

console.log(deleteDuplicates(head));

/* var deleteDuplicates = function(head) {  
    if(head === null || head.next === null)
        return head;

    let a = head;
    while(a.next !== null && a.next.next !== null){
        if(a.val === a.next.val){
            a.next = a.next.next;
        }
        if(a.next.next !== null && a.val !== a.next.val){
            a = a.next;
        }
    }
    if(a.val === a.next.val){
        a.next = null;
    }
    return head;
};
 */