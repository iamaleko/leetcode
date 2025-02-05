func areAlmostEqual(s1 string, s2 string) bool {
	var a, b byte
	for i := range len(s1) {
		if s1[i] != s2[i] {
			if a == 0 {
				a = s1[i]
        b = s2[i]
			} else if a == s2[i] && b == s1[i] {
				b = 0
			} else {
        return false
      }
		}
	}
	return b == 0
}