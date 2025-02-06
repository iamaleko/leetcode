func tupleSameProduct(nums []int) int {
  d := map[int]bool{}
  for _, num := range nums {
    d[num] = true
  }
  m := map[int]int{}
  for i := 0; i < len(nums)-1; i++ {
    for j := i+1; j < len(nums); j++ {
      m[nums[i]*nums[j]]++
    }
  }
  ans := 0
  for _, v := range m {
    if v > 1 {
      s := float64(v-1)
      ans += int(s*s/2*8 + 4*s)
    }
  }
  return ans
}