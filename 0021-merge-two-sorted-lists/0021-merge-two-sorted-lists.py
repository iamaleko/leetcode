# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
  def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
    head = ListNode()
    list = head

    while list1 or list2:
      if list1 and (not list2 or list1.val < list2.val):
        list.next = list1
        list = list1
        list1 = list1.next
      elif list2:
        list.next = list2
        list = list2
        list2 = list2.next

    return head.next
        