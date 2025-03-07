/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
  head := &ListNode{}
  tail := head

  for list1 != nil && list2 != nil {
    if list1.Val < list2.Val {
      tail.Next = list1
      list1 = list1.Next
    } else {
      tail.Next = list2
      list2 = list2.Next
    }
    tail = tail.Next
  }

  tail.Next = list1
  if list2 != nil {
    tail.Next = list2
  }

  return head.Next
}