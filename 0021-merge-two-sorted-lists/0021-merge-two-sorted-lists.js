/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
    const head = {next: null};
    let tail = head;
    while (list1 && list2) {
        if (list1.val > list2.val) {
            list2 = (tail = tail.next = list2).next;
        } else {
            list1 = (tail = tail.next = list1).next;
        }
    }
    if (list1) {
        tail.next = list1;
    } else if(list2) {
        tail.next = list2;
    }
    return head.next;
};