func canBeValid(s string, locked string) bool {
  index, stack, locks := []int{}, []bool{}, []rune(locked)
  inp, stp := 0, 0
  for i, rn := range []rune(s) {
    if locks[i] == '0' {
      stack = append(stack, false)
      stp++
    } else if rn == ')' {
      if stp == 0 {
        return false
      }
      if inp > 0 {
        inp--
        stack[index[inp]] = false
        index = index[:inp]
      }
      stp--
      stack = stack[:stp]
    } else {
      stack = append(stack, true)
      index = append(index, stp)
      stp++
      inp++
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