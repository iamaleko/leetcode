func findDifferentBinaryString(nums []string) string {
  s := map[string]bool{}
  for _, str := range nums {
    s[str] = true
  }
  var backtrack func(n int, str string) string
  backtrack = func(n int, str string) string {
    if n == 0 {
      if s[str] {
        return ""
      }
      return str
    }
    n--
    if str := backtrack(n, str + "0"); str != "" {
      return str
    }
    return backtrack(n, str + "1")
  }
  return backtrack(len(nums[0]), "")
}