class Solution:
  def deleteNode(self, node):
    node.val = node.next.val if node.next else None
    node.next = node.next.next if node.next else None