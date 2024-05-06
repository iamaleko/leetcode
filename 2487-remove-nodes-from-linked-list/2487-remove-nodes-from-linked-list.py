# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
  def removeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
    st = [head]
    node = head.next
    while node:
      while st and st[-1].val < node.val:
        st.pop()
      if st:
        st[-1].next = node
      st.append(node)
      node = node.next
    return st[0]