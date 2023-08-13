class ListNode(object):
  def __init__(self, x, n = None):
    self.val = x
    self.next = n

class Solution(object):
  def addTwoNumbers(self, l1, l2):
    f = l = ListNode(0)
    d = 0
    while True:
      if l1:
        s1 = l1.val
        l1 = l1.next
      else:
        s1 = 0
      if l2:
        s2 = l2.val
        l2 = l2.next
      else:
        s2 = 0
      s = s1 + s2 + d
      d = s / 10
      l.val = s % 10
      if l1 or l2 or d:
        l.next = ListNode(0)
        l = l.next;
      else:
        return f