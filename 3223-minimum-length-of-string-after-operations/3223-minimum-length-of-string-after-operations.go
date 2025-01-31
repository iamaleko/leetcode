func minimumLength(s string) int {
  count := map[rune]int{}
  for _, rn := range []rune(s) { count[rn]++ }
  ans := len(s)
  for _, n := range count {
    ans -= n - 1
    if n & 1 == 0 { ans++ }
  }
  return ans
}