func canBeValid(s string, locked string) bool {
  index, stack, locks := []int{}, []bool{}, []rune(locked)
  for i, rn := range []rune(s) {
    if locks[i] == '0' {
      stack = append(stack, false)
    } else if rn == ')' {
      if len(stack) == 0 {
        return false
      }
      if len(index) > 0 {
        stack[index[len(index)-1]] = false
        index = index[:len(index)-1]
      }
      stack = stack[:len(stack)-1]
    } else {
      index = append(index, len(stack))
      stack = append(stack, true)
    }
  }
  opened, balanced := 0, true
  for _, el := range stack {
    if el {
      opened++
    } else if opened > 0 {
      opened--
    } else {
      balanced = !balanced
    }
  }
  return opened == 0 && balanced
}