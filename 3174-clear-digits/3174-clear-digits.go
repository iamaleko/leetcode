func clearDigits(s string) string {
	runes := []rune(s)
	offset := 0
	for i, rn := range runes {
		if rn >= '0' && rn <= '9' {
			offset += 2
		} else if offset > 0 {
			runes[i-offset] = rn
		}
	}
	return string(runes[:len(runes)-offset])
}

// func clearDigits(s string) string {
//   ans := []rune{}
//   runes := []rune(s)
//   remove := 0
//   slices.Reverse(runes)
//   for _, rn := range runes  {
//     if unicode.IsDigit(rn) {
//       remove++
//     } else if remove != 0 {
//       remove--
//     } else {
//       ans = append(ans, rn)
//     }
//   }
//   slices.Reverse(ans)
//   return string(ans)
// }