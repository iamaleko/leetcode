import (
  "slices"
)

func generateParenthesis(n int) []string {
  var gen func(available int, s []rune, opened int) [][]rune
  gen = func(available int, s []rune, opened int) [][]rune {
    if opened > 0 && available > 0 {
      return slices.Concat(
          gen(available - 1, append(s, '('), opened + 1),
          gen(available, append(slices.Clone(s), ')'), opened - 1),
      )
    } else if opened > 0 {
      return gen(available, append(s, ')'), opened - 1)
    } else if available > 0 {
      return gen(available - 1, append(s, '('), opened + 1)
    }
    return [][]rune{ s }
  }
  ans := []string{}
  rns := gen(n, []rune{}, 0)
  for _, rns := range rns {
    ans = append(ans, string(rns))
  }
  return ans
}