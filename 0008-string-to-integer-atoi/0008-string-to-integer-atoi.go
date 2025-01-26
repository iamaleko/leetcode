import (
  "fmt"
)
func myAtoi(s string) int {
  const Space, Plus, Minus rune = 32, 43, 45
  m := map[rune]int{ 48: 0, 49: 1, 50: 2, 51: 3, 52: 4, 53: 5, 54: 6, 55: 7, 56: 8, 57: 9 }
  ans, sign, unsigned, empty := 0, 1, true, true
  for _, rn := range s {
    if empty && unsigned && rn == Space {
      continue
    } else if empty && unsigned && rn == Plus {
      unsigned = false
    } else if empty && unsigned && rn == Minus {
      sign = -sign
      unsigned = false
    } else if digit, ok := m[rn]; ok {
      ans *= 10
      ans += digit
      empty = false
      if ans * sign < -1 << 31 {
        return -1 << 31
      } else if ans * sign > (1 << 31) - 1 {
        return (1 << 31) - 1
      }
    } else {
      break
    }
  }
  return ans * sign
}