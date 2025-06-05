func smallestEquivalentString(a string, b string, s string) string {
  parent, ans := map[byte]byte{}, make([]byte, len(s))
  for i := range len(a) {
    l, r := a[i], b[i]
    if _, ok := parent[l]; ok {
      for parent[l] != l {
        l = parent[parent[l]]
      }
    } else {
      parent[l] = l
    }
    if _, ok := parent[r]; ok {
      for parent[r] != r {
        r = parent[parent[r]]
      }
    } else {
      parent[r] = r
    }
    if l > r {
      l, r = r, l
    }
    parent[r] = l
  }
  for i := range len(s) {
    k := s[i]
    if _, ok := parent[k]; ok {
      for parent[k] != k {
        k = parent[parent[k]]
      }
    }
    ans[i] = k
  }
  return string(ans)
}