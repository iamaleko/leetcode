func findMaxConsecutiveOnes(nums []int) int {
  ans := 0
  cnt := 0
  for _, num := range nums {
    if num == 1 {
      cnt += 1
    } else {
      if cnt > ans {
        ans = cnt
      }
      cnt = 0
    }
  }
  if cnt > ans {
    ans = cnt
  }
  return ans
}