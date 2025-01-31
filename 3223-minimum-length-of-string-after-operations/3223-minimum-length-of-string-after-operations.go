func minimumLength(s string) int {
  count := [26]int{}
  for _, rn := range []rune(s) { count[rn - 'a']++ }
  ans := len(s)
  for _, n := range count {
    if n > 2 {
      ans -= n - 1
      if n & 1 == 0 { ans++ }
    }
  }
  return ans
}