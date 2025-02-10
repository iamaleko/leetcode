import "math"

func dist(a []int, b []int) float64 {
  return math.Sqrt(math.Pow(float64(a[0] - b[0]), 2) + math.Pow(float64(a[1] - b[1]), 2))
}

func square(a []int, b []int, c []int) float64 {
  da := dist(a, b)
  db := dist(b, c)
  dc := dist(c, a)
  hp := (da + db + dc) / 2
  sq := math.Sqrt(hp * (hp - da) * (hp - db) * (hp - dc))
  if math.IsNaN(sq) {
    return 0
  }
  return sq
}

func largestTriangleArea(points [][]int) float64 {
  n := len(points)
  var ans float64
  for i := 0; i < n-2; i++ {
    for j := i + 1; j < n-1; j++ {
      for k := j + 1; k < n; k++ {
        ans = max(ans, square(points[i], points[j], points[k]))
      }
    }
  }
  return ans
}