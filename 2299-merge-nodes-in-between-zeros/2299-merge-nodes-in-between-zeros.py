class Solution:
  def mergeNodes(self, node: Optional[ListNode]) -> Optional[ListNode]:
    head = ListNode(0)
    tail = head
    rs = 0
    node = node.next
    while node:
      rs += node.val
      if not node.val:
        tail.next = ListNode(rs)
        tail = tail.next
        rs = 0
      node = node.next
    return head.next

        