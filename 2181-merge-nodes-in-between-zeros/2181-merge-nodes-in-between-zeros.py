class Solution:
  def mergeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
    node = head.next
    head = ListNode()
    tail = head
    rs = 0
    while node:
      if node.val:
        rs += node.val
      else:
        tail.next = ListNode(rs)
        tail = tail.next
        rs = 0
      node = node.next
    return head.next

        