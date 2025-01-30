import (
  "slices"
)

func generateParenthesis(n int) []string {
  var gen func(available int, s string, opened int) []string
  gen = func(available int, s string, opened int) []string {
    if opened > 0 && available > 0 {
      return slices.Concat(
          gen(available - 1, s + "(", opened + 1),
          gen(available, s + ")", opened - 1),
      )
    } else if opened > 0 {
      return gen(available, s + ")", opened - 1)
    } else if available > 0 {
      return gen(available - 1, s + "(", opened + 1)
    }
    return []string{ s }
  }
  return gen(n, "", 0)
}