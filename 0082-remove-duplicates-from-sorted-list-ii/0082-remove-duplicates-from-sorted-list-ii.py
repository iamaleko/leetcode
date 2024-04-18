class Solution:
  def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
    head = ListNode(1000, head)
    prev = head
    last = head
    node = head.next
    while node:
      if last.val == node.val:
        prev.next = node.next
      elif last.val != node.val and (not node.next or node.val != node.next.val):
        prev = node
      last = node
      node = node.next
    return head.next