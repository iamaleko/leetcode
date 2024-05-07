# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
  def doubleIt(self, head: Optional[ListNode]) -> Optional[ListNode]:
    n = 0
    node = head
    while node:
      n *= 10
      n += node.val
      node = node.next
    n *= 2
    s = ''
    while n:
      s = str(n % 10) + s
      n //= 10
    node = head = ListNode(0, head)
    for ch in s:
      if not node.next:
        node.next = ListNode()
      node = node.next
      node.val = int(ch)
    return head.next
        