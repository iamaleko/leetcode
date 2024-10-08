func findTheLongestSubstring(s string) int {
  v := map[rune]int{ rune('a'): 1, rune('e'): 2, rune('i'): 4, rune('o'): 8, rune('u'): 16 }
  m := map[int]int{ 0: -1 }
  mask := 0
  ans := 0
  for i, r := range s {
    if bit, ok := v[r]; ok {
      mask ^= bit
    }
    if pos, ok := m[mask]; ok {
      if diff := i - pos; ans < diff {
        ans = diff
      }
    } else {
      m[mask] = i
    }
  }
  return ans
}