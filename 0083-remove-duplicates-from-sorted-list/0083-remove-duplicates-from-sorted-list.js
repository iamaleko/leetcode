/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = (head) => {
    let tail = head;
    while (tail && tail.next) {
        if (tail.val === tail.next.val) {
            tail.next = tail.next.next;
        } else {
            tail = tail.next;
        }
    }
    return head;
};