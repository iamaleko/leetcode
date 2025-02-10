import "unicode"

func shortestCompletingWord(licensePlate string, words []string) string {
	lpc, lp := 0, [26]int{}
	for _, rn := range licensePlate {
		if unicode.IsLetter(rn) {
			rn = unicode.ToLower(rn)
			lp[rn-'a']++
      lpc++
		}
	}
  ans := ""
  main: for _, word := range words {
    if ans == "" || len(word) < len(ans) {
      wdc, wd := 0, [26]int{}
      for _, rn := range word {
        wd[rn-'a']++
        if wd[rn-'a'] <= lp[rn-'a'] {
          wdc++
          if wdc == lpc {
            ans = word
            continue main
          }
        }
      }
    }
	}
	return ans
}