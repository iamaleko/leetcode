func judgeCircle(moves string) bool {
  y, x := 0, 0
  for _, b := range moves {
    switch b {
      case 'U': y--
      case 'D': y++
      case 'L': x--
      case 'R': x++
    }
  }
  return y == 0 && x == 0
}