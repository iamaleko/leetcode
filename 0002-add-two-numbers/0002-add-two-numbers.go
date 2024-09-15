/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
  if l1.Val == 0 && l1.Next == nil { return l2 }
  if l2.Val == 0 && l2.Next == nil { return l1 }
  head := ListNode{ Val: 0, Next: nil }
  tail := &head
  mem := 0

  for l1 != nil || l2 != nil || mem > 0 {
    sum := mem
    if l1 != nil { sum += l1.Val }
    if l2 != nil { sum += l2.Val }

    mem = sum / 10
    tail.Next = &ListNode{ Val: sum % 10, Next: nil }
    tail = tail.Next

    if l1 != nil { l1 = l1.Next }
    if l2 != nil { l2 = l2.Next }
  }

  return head.Next
}