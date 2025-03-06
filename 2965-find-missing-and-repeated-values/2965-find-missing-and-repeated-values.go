func findMissingAndRepeatedValues(grid [][]int) []int {
  n := len(grid)
  check := make([]bool, n * n)
  ans := []int{}
  for _, row := range grid {
    for _, num := range row {
      if check[num - 1] {
        ans = append(ans, num)  
      } else {
        check[num - 1] = true
      }
    }
  }
  for i, present := range check {
    if !present {
      ans = append(ans, i + 1)
      break
    }
  }
  return ans
}