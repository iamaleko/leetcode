func romanToInt(s string) int {
  ans, last := 0, rune(0)
  dict := map[rune]int{ 'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1 }
  for _, rn := range s {
    if last != 0 && dict[rn] > dict[last] {
      ans += dict[rn] - dict[last] * 2
    } else {
      ans += dict[rn]
      last = rn
    }
  }
  return ans
}