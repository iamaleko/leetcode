# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
  def insertGreatestCommonDivisors(self, head: Optional[ListNode]) -> Optional[ListNode]:
    node = head      
    while node:
      if not node.next:
        break
      a, b = node.val, node.next.val
      if a != b:
        while a and b:
          a, b = a % b, b % a
      node.next = ListNode(a or b, node.next)
      node = node.next.next
    return head