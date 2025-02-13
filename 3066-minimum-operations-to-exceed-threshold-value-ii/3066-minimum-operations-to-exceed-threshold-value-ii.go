import "container/heap"

type Heap []int

func (h *Heap) Len() int {
  return len(*h)
}
func (h *Heap) Less(i, j int) bool {
  return (*h)[i] < (*h)[j]
}
func (h *Heap) Swap(i, j int) {
  (*h)[i], (*h)[j] = (*h)[j], (*h)[i]
}
func (h *Heap) Peak() int {
  return (*h)[0]
}
func (h *Heap) Push(x any) {
	*h = append(*h, x.(int))
}
func (h *Heap) Pop() any {
  var x int
  x, *h = (*h)[len(*h)-1], (*h)[:len(*h)-1]
	return x
}

func minOperations(nums []int, k int) int {
  h := new(Heap)
  *h = Heap(nums)
  heap.Init(h)
  ans := 0
  for h.Peak() < k {
    x, y := heap.Pop(h).(int), heap.Pop(h).(int)
    heap.Push(h, min(x, y) * 2 + max(x, y))
    ans++
  }
  return ans
}