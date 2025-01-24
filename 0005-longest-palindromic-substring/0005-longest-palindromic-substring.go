func bubbleFromCenter(s string, l int, r int) string {
  for l > -1 && r < len(s) && s[l] == s[r] {
    l--;
    r++;
  }
  return s[l + 1:r]
}

func longestPalindrome(s string) string {
  ans := ""
  for i := range s {
    a := bubbleFromCenter(s, i, i)
    if len(a) > len(ans) {
      ans = a
    }
    b := bubbleFromCenter(s, i, i + 1)
    if len(b) > len(ans) {
      ans = b
    }
  }
  return ans   
}