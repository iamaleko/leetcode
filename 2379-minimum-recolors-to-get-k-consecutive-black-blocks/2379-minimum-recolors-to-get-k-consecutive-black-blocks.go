func minimumRecolors(blocks string, k int) int {
	ans, whites := k,0
  k--
	for i := range blocks {
		if blocks[i] == 'W' {
			whites++
		}
		if i >= k {
			if ans > whites {
				ans = whites
			}
      if blocks[i-k] == 'W' {
				whites--
			}
		}
	}
	return ans
}