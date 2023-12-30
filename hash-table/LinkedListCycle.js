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
/* fast and slow pointer solution*/
var hasCycle = function(head) {

  let fast = head;
  while (fast && fast.next) {
    head = head.next;
    fast = fast.next.next;
    if (head === fast) return true;
  }
  return false;

};