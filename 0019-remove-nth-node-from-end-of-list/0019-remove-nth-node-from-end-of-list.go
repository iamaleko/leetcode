/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func removeNthFromEnd(head *ListNode, n int) *ListNode {
  head = &ListNode{0, head}
  node, prev := head, head
  for node.Next != nil {
    if n > 0 {
      n--
    } else {
      prev = prev.Next
    }
    node = node.Next
  }
  prev.Next = prev.Next.Next
  return head.Next
}