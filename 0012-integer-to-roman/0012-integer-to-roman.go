func intToRoman(num int) string {
  ans := ""
  for num != 0 {
    for _, s := range []struct{
      Val int
      Str string
    } {
      {1000, "M"},
      {900, "CM"},
      {500, "D"},
      {400, "CD"},
      {100, "C"},
      {90, "XC"},
      {50, "L"},
      {40, "XL"},
      {10, "X"},
      {9, "IX"},
      {5, "V"},
      {4, "IV"},
      {1, "I"},
    } {
      if num >= s.Val {
        num -= s.Val
        ans += s.Str
        break
      }
    }
  }
  return ans
}