func matrixReshape(mat [][]int, r int, c int) [][]int {
  if r * c != len(mat) * len(mat[0]) {
    return mat
  }
  y, x := 0, 0
  target := make([][]int, r)
  for _, row := range mat {
    for _, val := range row {
      if target[y] == nil {
        target[y] = make([]int, c)
      }
      target[y][x] = val
      x++
      if x == c {
        x = 0
        y++
      }
    }
  }
  return target
}