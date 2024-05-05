# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
  def deleteNode(self, node):
    node.val = node.next.val if node.next else None
    node.next = node.next.next if node.next else None
        