func minimumLength(s string) int {
  count, ans := [26]int{}, 0
  for _, rn := range s {
    count[rn - 'a']++
  }
  for _, n := range count {
    if n > 0 {
      ans += 2 - n & 1
    }
  }
  return ans
}