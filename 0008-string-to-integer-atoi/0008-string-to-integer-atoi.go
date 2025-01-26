import (
  "math"
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
      if ans * sign < math.MinInt32 {
        return math.MinInt32
      } else if ans * sign > math.MaxInt32 {
        return math.MaxInt32
      }
    } else {
      break
    }
  }
  return ans * sign
}