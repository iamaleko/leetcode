/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func swapPairs(head *ListNode) *ListNode {
  if head == nil || head.Next == nil {
    return head
  }
  var prevprev, prev, node *ListNode = nil, head, head.Next
  head = head.Next
  for node != nil {
    // fix prevprev
    if prevprev != nil { prevprev.Next = node }
    prevprev = prev
    // fix prev
    prev.Next = node.Next
    prev = prev.Next
    // fix node
    node.Next = prevprev
    if prevprev.Next != nil { node = prevprev.Next.Next } else { node = nil }
  }
  return head
}