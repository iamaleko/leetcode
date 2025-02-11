func removeOccurrences(s string, part string) string {
	n, m := len(s), len(part)
	skip := make([]int, n)
  matches := make([]map[int]int, n)
  match := map[int]int{}
	for i := 0; i < n; i++ {
		if skip[i] == 0 {
      // add new candidate
      if s[i] == part[0] {
				match[i] = 0
			}
      // save state
      matches[i] = maps.Clone(match)
      // check all candidates
      for start := range match {
        if s[i] == part[match[start]] {
          match[start]++
          if match[start] == m {
            skip[start] = i + 1
            i = max(-1, start - 2)
            match = maps.Clone(matches[i + 1])
            break
          }
        } else {
          delete(match, start)
        }
      }
		} else {
      i = skip[i]-1
		}
	}
  // build result string
  ans := []byte{}
  for i := 0; i < n; i++ {
    if skip[i] == 0 {
      ans = append(ans, s[i])
    } else {
      i = skip[i]-1
    }
  }
	return string(ans)
}

// kpygkivtlqooc[kpygkivtlqoocssnextkqzjpycbylkaonds]skpygkpygkivtlqoocssnextkqzjp[kpygkivtlqoocssnextkqzjpycbylkaonds112]ycbylkaondskivtlqoocssnextkqzjpycbylkaondssnextkqzjpycbylkaondshijzgaovndkjiiuwjtcpdpbkrfsi