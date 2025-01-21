import (
  "math"
)

func gridGame(grid [][]int) int64 {
  var left, right, ans float64 = 0, 0, math.Inf(1)
  for _, num := range grid[0] {
    right += float64(num)
  }
  for i := range len(grid[0]) {
    right -= float64(grid[0][i])
    if val := math.Max(left, right); val < ans {
      ans = val
    }
    left += float64(grid[1][i])
  }
  return int64(ans)
}