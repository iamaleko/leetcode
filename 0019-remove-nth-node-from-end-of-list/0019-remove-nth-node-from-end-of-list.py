# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
  def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
    head = ListNode(0, head)
    node, prev = head, head
    while node.next:
      if n:
        n -= 1
      else:
        prev = prev.next
      node = node.next
    if prev.next:
      prev.next = prev.next.next
    return head.next
        