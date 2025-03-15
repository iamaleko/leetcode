class Solution:
  def countOfSubstrings(self, w: str, k: int) -> int:
    ans, n, d = 0, len(w), {'a': 0, 'e': 1, 'i': 2, 'o': 3, 'u': 4}
    c, v = [n] * n, [-1] * 5
    cl, cr, wl = 0, 0, 0
    for wr in range(n):
      if w[wr] in d:
        v[d[w[wr]]] = wr
      else:
        c[cr] = wr
        cr += 1
      while cr - cl > k:
        if w[wl] in d:
          if wl == v[d[w[wl]]]:
            v[d[w[wl]]] = -1
        else:
          cl += 1
        wl += 1
      if cr - cl == k and min(v) > -1:
        ans += 1 + min(c[cl], min(v)) - wl
    return ans