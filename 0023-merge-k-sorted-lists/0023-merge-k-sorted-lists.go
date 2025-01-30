import (
	"slices"
	"container/heap"
)

type ListNodeHeap []*ListNode

func (h ListNodeHeap) Less(i, j int) bool {
	return h[i].Val < h[j].Val
}

func (h ListNodeHeap) Swap(i, j int) {
	h[i], h[j] = h[j], h[i]
}

func (h ListNodeHeap) Len() int {
	return len(h)
}

func (h *ListNodeHeap) Pop() (v any) {
	*h, v = (*h)[:h.Len()-1], (*h)[h.Len()-1]
	return
}

func (h *ListNodeHeap) Push(v any) {
	*h = append(*h, v.(*ListNode))
}

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeKLists(lists []*ListNode) *ListNode {
	lists = slices.DeleteFunc(lists, func(el *ListNode) bool { return el == nil })
	var h = new(ListNodeHeap)
	*h = ListNodeHeap(lists)
	heap.Init(h)
	head := &ListNode{}
	tail := head
	for h.Len() > 0 {
		node := heap.Pop(h).(*ListNode)
		if node.Next != nil {
			heap.Push(h, node.Next)
		}
		tail.Next = node
		tail = node
	}
	return head.Next
}