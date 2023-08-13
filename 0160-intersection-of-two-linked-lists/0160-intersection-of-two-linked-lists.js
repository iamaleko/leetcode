/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
    if (!headA && !headB) return null;
    const set = new Set();
    while (headA) {
        set.add(headA);
        headA = headA.next;
    }
    while (headB) {
        if (set.has(headB)) return headB;
        headB = headB.next;
    }
    return null;
};