func findTheLongestSubstring(s string) int {
  v := map[rune]uint8{ rune('a'): 1, rune('e'): 2, rune('i'): 4, rune('o'): 8, rune('u'): 16 }
  m := map[uint8]int{ 0: -1 }
  mask := uint8(0)
  ans := 0
  for i, r := range s {
    if bit, ok := v[r]; ok {
      mask ^= bit
    }
    if pos, ok := m[mask]; ok {
      if ans < i - pos {
        ans = i - pos
      }
    } else {
      m[mask] = i
    }
  }
  return ans
}