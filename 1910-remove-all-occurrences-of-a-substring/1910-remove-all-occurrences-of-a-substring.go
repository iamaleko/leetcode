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
      k := i
      for start := range match {
        if s[i] == part[match[start]] {
          match[start]++
          if match[start] == m {
            skip[start] = i + 1
            // fmt.Println("match", start, skip[start])
            k = max(-1, start - 2)
            // fmt.Println("go to", k + 1, matches[k + 1])
            delete(match, start)
          }
        } else {
          delete(match, start)
        }
      }
      if i != k {
        i = k
        if matches[i + 1] != nil {
          match = maps.Clone(matches[i + 1])
        } else {
          match = map[int]int{}
        }
      }
		} else {
      i = skip[i]-1
		}
	}
  // fmt.Println(matches)
  // fmt.Println(skip)
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