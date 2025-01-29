var dict = []string{"","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"}

func build(ans *[]string, rns *[]rune, prefix string, i int) {
  for _, rn := range dict[(*rns)[i] - '0'] {
    if i - 1 >= 0 {
      build(ans, rns, string(rn) + prefix, i - 1)
    } else {
      *ans = append(*ans, string(rn) + prefix)
    }
  }
}

func letterCombinations(digits string) []string {
  ans := []string{}
  if len(digits) > 0 {
    rns := []rune(digits)
    build(&ans, &rns, "", len(digits) - 1)
  }
  return ans
}