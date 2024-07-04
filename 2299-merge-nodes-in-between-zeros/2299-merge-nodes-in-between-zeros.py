class Solution:
  def mergeNodes(self, node: Optional[ListNode]) -> Optional[ListNode]:
    head = ListNode(0)
    tail = head
    rs = 0
    node = node.next
    while node:
      if node.val:
        rs += node.val
      else:
        tail.next = ListNode(rs)
        tail = tail.next
        rs = 0
      node = node.next
    return head.next

        