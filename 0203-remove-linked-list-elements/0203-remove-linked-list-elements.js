/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = (head, val) => {
    if (!head) return null;
    let pointer = head.next, last = head;
    while (pointer) {
        if (pointer.val === val) {
            last.next = null;
        } else {
            last.next = pointer;
            last = pointer;
        }
        pointer = pointer.next;
    }
    return head.val === val ? head.next : head;
};