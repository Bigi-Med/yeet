/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
   let linkedHash = new Map(); 
   let trueHead = head; 
   
   while(true){
    if(!head){
        return false;
    }
        if (head.next === trueHead){
            return true;
        }
        if(linkedHash.has(head.next)){
            return true;
        }       
        if(!head.next){
            return false;
        } 
        linkedHash.set(head.next,head)
        head = head.next;
   }
}