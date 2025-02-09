func dominantIndex(nums []int) int {
  a, b, i := 0, 0, 0
  for j, num := range nums {
    if num > a {
      a, b, i = num, a, j
    } else if num > b {
      b = num
    }
  }
  if a / 2 >= b {
    return i
  }
  return -1
}