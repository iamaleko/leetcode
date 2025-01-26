import (
  "strconv"
)

func isPalindrome(x int) bool {
  if x < 0 { return false }
  s := strconv.Itoa(x)
  n := len(s)
  for i := range n / 2 {
    if s[i] != s[n - i - 1] {
      return false
    }
  }
  return true
}