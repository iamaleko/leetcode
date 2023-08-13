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
const hasCycle = (head) => {
    while (head) {
        if (head.val === undefined) return true;
        head.val = undefined;
        head = head.next;
    }
    return false;
};