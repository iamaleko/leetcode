/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (head) => {
  let start = head;
  let end = head;
  let size = 1;

  while (end.next) {
    ++size;
    end.next.prev = end;
    end = end.next;
  }

  size = Math.floor(size/2)
  while (size--) {
    if (start?.val !== end?.val) return false;
    start = start?.next;
    end = end?.prev;
  }

  return true;
};