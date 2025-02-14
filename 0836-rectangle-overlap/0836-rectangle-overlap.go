func isRectangleOverlap(a []int, b []int) bool {
  return !(a[0] >= b[2] || a[2] <= b[0] || a[1] >= b[3] || a[3] <= b[1])
}