func gridGame(grid [][]int) int64 {
  left, right, ans := 0, 0, math.MaxInt
  for _, num := range grid[0] {
    right += num
  }
  for i := range grid[0] {
    right -= grid[0][i]
    if val := max(left, right); val < ans {
      ans = val
    }
    left += grid[1][i]
  }
  return int64(ans)
}