/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func insertGreatestCommonDivisors(head *ListNode) *ListNode {
  node := head
  for node != nil {
    if node.Next == nil {
      break
    }
    a, b := node.Val, node.Next.Val
    if a != b {
      for a != 0 && b != 0 {
        a, b = a % b, b % a
      }
    }
    node.Next = &ListNode{ Val: max(a, b), Next: node.Next }
    node = node.Next.Next
  }
  return head
}