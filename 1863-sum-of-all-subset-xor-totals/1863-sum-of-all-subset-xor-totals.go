func subsetXORSum(nums []int) int {
  ans := 0
  xors := []int{}
  for _, num := range nums {
    n := len(xors)
    for i := range n {
      ans += num ^ xors[i]
      xors = append(xors, num ^ xors[i])
    }
    ans += num
    xors = append(xors, num)
  }
  return ans
}