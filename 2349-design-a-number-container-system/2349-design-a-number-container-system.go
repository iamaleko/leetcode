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
func (h *Heap) Push(x any) {
	*h = append(*h, x.(int))
}
func (h *Heap) Pop() (x any) {
	x, *h = (*h)[h.Len()-1], (*h)[:h.Len()-1]
  return
}

type NumberContainers struct {
  Indexes map[int]*Heap
  Numbers map[int]int
}

func Constructor() NumberContainers {
  return NumberContainers{ map[int]*Heap{}, map[int]int{} }
}
func (this *NumberContainers) Change(i int, num int) {
  if h, ok := this.Indexes[num]; ok {
    heap.Push(h, i)
  } else {
    this.Indexes[num] = &Heap{ i }
    heap.Init(this.Indexes[num])
  }
  if old, ok := this.Numbers[i]; ok && old != num && this.Indexes[old].Len() == 1 {
    delete(this.Indexes, old)
  }
  this.Numbers[i] = num
}
func (this *NumberContainers) Find(num int) int {
  if _, ok := this.Indexes[num]; ok {
    for this.Indexes[num].Len() > 0 {
      i := (*this.Indexes[num])[0]
      if this.Numbers[i] == num {
        return i
      }
      heap.Pop(this.Indexes[num])
    }
  } 
  return -1
}